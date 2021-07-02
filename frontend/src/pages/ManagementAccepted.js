import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Template from '../components/Template'
import TranscriptGridItem from '../components/TranscriptGridItem'
import { API_BASE } from '../consts'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAcceptedApplications } from '../redux/ManagementDashboard/actions'
import { generateHeaders } from '../utils'

function MangementAccepted() {
    const dispatch = useDispatch()
    const applications = useSelector(state=>state.managementDasboard.applications)
    useEffect(()=>{
        axios.get(`${API_BASE}/api/management/accepted/`, generateHeaders(localStorage.getItem('accessToken')))
        .then(res=>{
            dispatch(fetchAcceptedApplications(res.data))
            console.log("then accpeted",res)
            console.log("state accepted",applications)
        })
        .catch(err=>console.log("error",err))
    },[])
    return (
        <Template>
            <Grid item container >
             {/* {applications.map((item, idx)=>(
                <TranscriptGridItem key={idx} 
                    title="Transcript Application" 
                    subtitle={`Created at ${item.created_at.split('T')[0]}`}
                    // status={item.Faculty?item.accepted?"Accepted":"Rejected":"Pending"}
                />
                )
            )}  */}
            </Grid>
        </Template>
    )
}

export default MangementAccepted