/* eslint-disable no-unused-vars */
import { Box, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import Wrapper from 'Components/Wrapper'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function Dashboard() {
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
    console.log(data, 'data')
  }
  return (
    <>
      <Wrapper>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            style={{
              width: '30%',
              border: '1px solid rgb(47, 58, 70)',
              borderRadius: '10px',
              padding: '20px',
              background: 'white',
              boxShadow: '2px 2px #888888',
              opacity: '0.7'
            }}
          >
            <Typography variant='h6' gutterBottom>
              EMPLOYEE FORM
            </Typography>
            <Grid container spacing={3}>
  
              <Grid item xs={12} sm={6}>
                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      id='firstName'
                      label='First name'
                      fullWidth
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoComplete='given-name'
                      variant='standard'
                    />
                  )}
                  name='firstName'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      id='lastName'
                      label='Last name'
                      fullWidth
                      autoComplete='family-name'
                      variant='standard'
                    />
                  )}
                  name='lastName'
                />
              </Grid>
  
              <Grid item xs={12}>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    fullWidth
                    id='email'
                    label='Email Address'
                    autoFocus
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    variant='standard'
                    {...register('email', { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }, { maxLength: 20 })}
                  />
                )}
                name='email'
              />
              </Grid>

              <Grid item xs={12}>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    fullWidth
                    type='number'
                    id='empId'
                    label='Employee ID'
                    autoFocus
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    variant='standard'
                    {...register('empId', { maxLength: 4 })}
                  />
                )}
                name='empId'
              />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='city'
                  name='city'
                  label='City'
                  fullWidth
                  autoComplete='shipping address-level2'
                  variant='standard'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField id='state' name='state' label='State/Province/Region' fullWidth variant='standard' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='zip'
                  name='zip'
                  label='Zip / Postal code'
                  fullWidth
                  autoComplete='shipping postal-code'
                  variant='standard'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='country'
                  name='country'
                  label='Country'
                  fullWidth
                  autoComplete='shipping country'
                  variant='standard'
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color='secondary' name='saveAddress' value='yes' />}
                  label='Use this address for payment details'
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Wrapper>
    </>
  )
}

export default Dashboard
