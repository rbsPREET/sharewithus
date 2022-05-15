import { Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CategoryForm = ({ postDataTemp, setPostDataTemp, categoriesList, handleSelectCategory }) => {
    const [categories, setCategories] = useState({
        activeCategory: null,
        categoriesList: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
    })

    const onCategoryClick = (item, index) => {
        // handle main post details (parent)
        handleSelectCategory(item.category)

        // temp post data
        setPostDataTemp({
            ...postDataTemp,
            categorySelectedId: index
        })

        // Set styling to active category
        setCategories({
            ...categories,
            activeCategory: categories.categoriesList[index]
        })
    }

    const toggleSelectedCategory = (index) => {
        if (categories.categoriesList[index] === categories.activeCategory)
            return "#78b2df"
        else
            return "#DEECF7"
    }

    useEffect(() => {
        setCategories({
            ...categories,
            activeCategory: categories.categoriesList[postDataTemp.categorySelectedId]
        })
    }, [])

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Category Selector
            </Typography>
            <Grid container spacing={1}>
                {categoriesList.map((item, index) => (
                    <Grid
                        key={index}
                        item
                        xs={3}
                    >
                        <Stack
                            direction='column'
                            bgcolor={toggleSelectedCategory(index)}
                            alignItems='center'
                            spacing={1}
                            p={2}
                            sx={{ cursor: 'pointer' }}
                            onClick={() => onCategoryClick(item, index)}
                        >
                            {item.icon}
                            <Typography
                                autoComplete="category-name"
                                variant="standard"
                                fontSize='small'
                            >
                                {item.category}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default CategoryForm