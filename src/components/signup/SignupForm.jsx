import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom"
import axios from "axios";
import { storeLocalStorage } from "../../store/authStore/action";
import { useDispatch } from "react-redux";
const theme = createTheme();

export const SignupForm = ({ signupgoogle }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let dataAdmin = {
            email: data.get('email'),
            password: data.get('password'),
            firstname: data.get('firstName'),
            lastname: data.get('lastName')
        };

        let { email, password, firstname, lastname } = dataAdmin;

        if (!email || !password || !firstname || !lastname) {
            return false
        }
        else {

            axios.post("http://localhost:2530/admin_data", {
                email, password, firstname, lastname
            }).then(({ data: { token } }) => {
                dispatch(storeLocalStorage(token))
                setTimeout(() => {
                    history.push("/dash_board")
                }, 3000);
            })
        }


    };

    // http://localhost:2530/admin_data
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I accept terms and conditions."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container >
                                <Grid item xs>
                                    <Button
                                        type="submit"
                                        variant="text"
                                        sx={{ mt: 0, mb: 2 }}
                                        style={{ fontSize: '13px' }}
                                        onClick={() => { signupgoogle() }}
                                    >
                                        Sign up with google
                                    </Button>
                                </Grid>
                                <Grid item>

                                    <Button
                                        type="submit"
                                        variant="text"
                                        sx={{ mt: 0, mb: 2 }}
                                        style={{ fontSize: '13px' }}
                                        onClick={() => { history.push("/signin") }}
                                    >
                                        Sign in
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )

}