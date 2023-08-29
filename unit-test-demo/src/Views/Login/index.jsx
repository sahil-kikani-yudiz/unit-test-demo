/* eslint-disable no-unused-vars */
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Alert, Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Paper, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { route } from 'Constants/AllRoutes'

function Login() {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: ''
    }
  })

  function onSubmit(data) {
    console.log(data)
    localStorage.setItem('isUserLoggedIn', true)
    navigate(route.dashboard)
  }

  const defaultTheme = createTheme()

  console.log(errors, 'err')
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1682608388687-f26e5de54316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZXxlbnwwfHwwfHx8MA==&w=1000&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }} style={{ width: '500px' }}>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    margin='normal'
                    fullWidth
                    id='email'
                    label='Email Address'
                    autoFocus
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    {...register('email', { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }, { maxLength: 20 })}
                  />
                )}
                name='email'
              />
              {errors.email && errors.email.type == 'required' ? (
                <Alert size='small' fullWidth severity='error'>
                  This Field is Required
                </Alert>
              ) : (
                errors.email &&
                errors.email.type == 'pattern' && (
                  <Alert fullWidth size='small' severity='error'>
                    Invalid email format
                  </Alert>
                )
              )}

              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    margin='normal'
                    fullWidth
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    {...register('password', { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/ })}
                  />
                )}
                name='password'
              />
              {errors.password && errors.password.type == 'required' ? (
                <Alert size='small' fullWidth severity='error'>
                  This Field is Required
                </Alert>
              ) : (
                errors.password &&
                errors.password.type == 'pattern' && (
                  <Alert fullWidth size='small' severity='error'>
                    Password must contain No Space, 1 number, uppercase, lowercase, and special character.
                  </Alert>
                )
              )}
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login
