import { ArrowBack, ArrowForward, Drafts, Inbox } from '@mui/icons-material'
import { Box, Button, CircularProgress, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, PaginationItem, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { PaginationContext } from '../../context/PaginationContext'
import useFetch from '../../hooks/useFetch'
import PaginationUi from '../../ui/Pagination'

const PostsList = ({ categoryId }) => {
    const [search, setSearch] = useState('')
    const { categoryName } = useParams()

    const { data, loading, error, reFetch } = useFetch(`/posts/search?categoryId=${categoryId}&searchQuery=${search}`)

    const [filter, setFilter] = useState('uploadDate');

    const handleFilterChange = (event, filter) => {
        setFilter(filter);
    };

    // Query Params Function
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    // Pagination
    const location = useLocation()
    const navigate = useNavigate()
    const query = useQuery()
    const searchQuery = query.get('searchQuery')
    const pageQuery = query.get('page')

    // Pagination
    const { paginateData, page, count, dispatch, loading: paginateLoading } = useContext(PaginationContext)

    useEffect(() => {
        if (categoryId) {
            try {
                dispatch({ type: "START_FETCH", payload: { apiEndpoint: `/posts?categoryId=${categoryId}&page=${pageQuery}` } })
            } catch (error) {
                console.log("Failed fetching paginate data")
            }
        }
    }, [categoryId, pageQuery, dispatch])

    useEffect(() => {
        if (search) {
            navigate(`/${categoryName}/search?searchQuery=${search}&page=${pageQuery}`)
        }
    }, [navigate, pageQuery, categoryName, paginateData, search, searchQuery, page, dispatch, categoryId])

    useEffect(() => {
        // implement search textfield if searchQuery exist on page load
        if (searchQuery) {
            setSearch(searchQuery)
            navigate(`/${categoryName}/search?searchQuery=${searchQuery}&page=${pageQuery}`)
        }
    }, [setSearch, searchQuery, categoryName, navigate])

    const navigateToPost = (id) => {
        navigate(`/${categoryName}/${id}`)
    }

    console.log(paginateData)

    return (
        <Paper sx={{ mt: 1 }} variant='outlined' square>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={1}>
                    <Box flex={3} pl={1}>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                {/* map data */}
                                {paginateLoading ? <CircularProgress sx={{ m: 1 }} /> :
                                    paginateData?.map(post => (
                                        <ListItem key={post._id} disablePadding onClick={() => navigateToPost(post._id)}>
                                            <ListItemButton>
                                                <Stack direction='row' gap={1} justifyContent='space-around' alignItems='center' width='100%' divider={<Divider orientation='vertical' flexItem />}>
                                                    <ListItemText primary={post.title} secondary={`(${post.createdBy?.username}, ${post.createdBy?.age}${post.createdBy?.gender.charAt(0)})`} sx={{ width: '50%', overflow: 'hidden' }} />
                                                    <Tooltip title="Comments" arrow>
                                                        <ListItemText primary={post.comments} sx={{ textAlign: 'center' }} />
                                                    </Tooltip>
                                                    <ListItemText primary={post.createdAt} sx={{ textAlign: 'center' }} />
                                                </Stack>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                            </List>
                        </nav>
                    </Box>
                    <Stack direction='column' flex={1} p={1} spacing={1}>
                        <TextField
                            name='search'
                            variant='outlined'
                            label='Search Posts'
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <ToggleButtonGroup
                            orientation="vertical"
                            value={filter}
                            exclusive
                            onChange={handleFilterChange}
                            color='primary'
                            fullWidth
                        >
                            <ToggleButton value="uploadDate" aria-label="uploadDate">
                                Upload date
                            </ToggleButton>
                            <ToggleButton value="reviews" aria-label="reviews">
                                Reviews
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                </Stack>
                <Paper variant='outlined' square sx={{ p: 1 }}>
                    <Stack direction="column" alignItems="center">
                        <PaginationUi
                            linkApiEndpoint={`/${categoryName}`}
                            page={page}
                            count={count}
                        />
                    </Stack>
                </Paper>
            </Box >
        </Paper>
    )
}

export default PostsList