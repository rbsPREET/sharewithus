import { Home } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { Favorite, PregnantWoman, FamilyRestroom, MilitaryTech, School, FitnessCenter, Work, Loyalty } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CategoryForm from '../components/Posts/Create/CategoryForm';
import ContentForm from '../components/Posts/Create/ContentForm';
import ReviewForm from '../components/Posts/Create/ReviewForm';
import axios from 'axios'

const CreatePost = () => {
    const [activeStep, setActiveStep] = useState(0);
    // User Auth details with Redux state
    const [postDetails, setPostDetails] = useState({
        category: "", title: "", description: "",
    })

    const navigate = useNavigate()

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Handle Category Selection Form (Step 1)
    const handleSelectCategory = (category) => {
        setPostDetails({
            ...postDetails,
            category: category,
        })
    }

    // Handle Content of the Post (Step 2)
    const handleContentForm = (e) => {
        setPostDetails({
            ...postDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            await axios.post("/posts", postDetails)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("Post Details: ", postDetails)
    }, [postDetails])

    const steps = ['Category Selector', 'Content Details', 'Review Post'];

    const categoriesList = [
        { category: "Relationship", isActive: true, icon: <Favorite /> },
        { category: "Pregnants", isActive: false, icon: <PregnantWoman /> },
        { category: "Family", isActive: false, icon: <FamilyRestroom /> },
        { category: "Military", isActive: false, icon: <MilitaryTech /> },
        { category: "Students", isActive: false, icon: <School /> },
        { category: "Career", isActive: false, icon: <Work /> },
        { category: "Bedroom", isActive: false, icon: <Loyalty /> },
        { category: "Fitness", isActive: false, icon: <FitnessCenter /> },
    ]

    // fetch data when navigating back and forth in the steps
    const [postDataTemp, setPostDataTemp] = useState({
        categorySelectedId: null, title: '', description: ''
    })

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <CategoryForm postDataTemp={postDataTemp} setPostDataTemp={setPostDataTemp} categoriesList={categoriesList} handleSelectCategory={handleSelectCategory} />;
            case 1:
                return <ContentForm postDataTemp={postDataTemp} setPostDataTemp={setPostDataTemp} handleContentForm={handleContentForm} />;
            case 2:
                return <ReviewForm data={postDetails} />;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" square sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <IconButton LinkComponent={Link} to='/' color='primary'>
                    <Home />
                </IconButton>
                <Typography component="h1" variant="h4" align="center">
                    Create Post
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <>
                    {activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Thank you for submitting a new Post on ShareWithUs.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your post number is #123. An Admin will check your post to confirm it doesn't contain an unappropriate content inside of it,
                                check out again later for the post approval.
                            </Typography>
                        </>
                    ) : (
                        <>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                {activeStep === steps.length - 1 ?
                                    (
                                        <Button
                                            variant="contained"
                                            onClick={handleSubmit}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            Submit
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            Next
                                        </Button>
                                    )}
                            </Box>
                        </>
                    )}
                </>
            </Paper>
        </Container>
    )
}

export default CreatePost