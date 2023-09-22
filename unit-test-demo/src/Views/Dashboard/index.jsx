import { Alert, Box, Button, Grid, TablePagination, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TableFooter from '@mui/material/TableFooter'

import Wrapper from 'Components/Wrapper'

function Dashboard() {
  const [searchValue, setSearchValue] = useState('')

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: ''
    }
  })

  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)
  const [empData, setEmpData] = useState([{
    empId: 1,
    firstName: 'Isha',
    lastName: 'vaghmahsi',
    email: 'isha@gmail.com',
    city: 'rajkot',
    state: 'gujrat',
    zip: 32222,
    country: 'india'
  }])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  function handleClear() {
    reset()
  }

  function onSubmit(data) {
    empData.push(data)
    setEmpData([...empData])
    // handleClear()
  }
  console.log({ empData })
  return (
    <>
      <Wrapper>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
          <Box
            component='form'
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
                  name='firstName'
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
                      onChange={onChange}
                      value={value}
                      autoComplete='given-name'
                      variant='standard'
                    />
                  )}
                />
                {errors.firstName && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name='lastName'
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      id='lastName'
                      label='Last name'
                      fullWidth
                      autoComplete='family-name'
                      variant='standard'
                    />
                  )}
                />
                {errors.lastName && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name='email'
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
                      onChange={onChange}
                      value={value}
                      variant='standard'
                      {...register('email', { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }, { maxLength: 20 })}
                    />
                  )}
                />
                {errors.email && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name='empId'
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
                      onChange={onChange}
                      value={value}
                      variant='standard'
                      {...register('empId', { maxLength: 10 })}
                    />
                  )}
                />
                {errors.empId && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name='city'
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField                      
                      id='city'
                      name='city'
                      label='City'
                      fullWidth
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      autoComplete='shipping address-level2'
                      variant='standard'
                    />
                  )}
                />
                {errors.city && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name='state'
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      id='state'
                      name='state'
                      label='State/Province/Region'
                      fullWidth
                      variant='standard'
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.state && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name='zip'
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField                      
                      id='zip'
                      name='zip'
                      label='Zip / Postal code'
                      fullWidth
                      autoComplete='shipping postal-code'
                      variant='standard'
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.zip && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name='country'
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField                      
                      id='country'
                      name='country'
                      label='Country'
                      fullWidth
                      autoComplete='shipping country'
                      variant='standard'
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.country && (
                  <Alert size='small' fullWidth severity='error'>
                    This Field is Required
                  </Alert>
                )}
              </Grid>
            </Grid>
            <Button type='submit' onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
            <Button onClick={handleClear}>
              clear
            </Button>
          </Box>
        </div>
      </Wrapper>
      <Wrapper style={{ margin: '50px 100px', paddingBottom: '50px' }}>
        <TextField
          label='Search...'
          placeholder='Search...'
          variant='standard'
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          fullWidth
          style={{ backgroundColor: 'white' }}
          margin='normal'
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Emp ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {empData
                .filter((row) => row.firstName.toLowerCase().includes(searchValue.toLowerCase()))
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map((row) => (
                  <TableRow key={row.empId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{row.empId}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell>{row.zip}</TableCell>
                    <TableCell>{row.country}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={empData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Wrapper>
    </>
  )
}

export default Dashboard
