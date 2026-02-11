import { useUser } from "../context/UserContext"
import { Card, CardContent, CardHeader, CardActions, Button} from "@mui/material"


import "../css/NurseCard.css"


export default function NurseCard(){

    const {user} = useUser()

    return(   
        <div className="nurse-card-container">        

           <Card className="nurse-card">
                
                <CardHeader className="nurse-card-title"title={`Nurse ${user?.fullName}`} />

                <CardContent>
                    <div className="content-container" style = {{ display: "flex", flexDirection: "row", gap: "20px" }}>
                        <div>
                            <p>Your Instructor:</p>
                            <p>Your Class:</p>
                            <p>Your Email:</p>
                        </div>

                        {/* INSTRUCTOR NAME NOT CURRENTLY AVAILABLE*/}
                        <div>
                            <p>{"Filler Name"}</p>
                            <p>{user?.className || "Unenrolled"}</p>
                            <p>{user?.email}</p>

                        </div>
                    </div>


                    <div className="content-container" style = {{ display: "flex", flexDirection: "row", height: '10rem', justifyContent: 'center',  gap: "20px" }}>
                        <div>
                            <p> Your Patients </p>
                        </div>
                    </div>
                    
                    <div className="content-container" style = {{ display: "flex", flexDirection: "row", alignItems:'center', justifyContent: 'center' }}>
                        <CardActions>
                            <Button style ={{backgroundColor: "#d48d30"}} variant="contained" >
                                Reset Password
                            </Button>
                        </CardActions>
                    </div>
                </CardContent>
                <p className="nurse-card-footer">If any info appears incorrect, please contact your instructor.</p>
           </Card>
            
            
            
        </div>
 
    )

}

