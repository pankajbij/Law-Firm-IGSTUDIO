import { Box, Container, Typography } from "@mui/material"

import styles from './LawSection.module.css';

import bussinessLaw from "../../assets/law/bussinessLaw.png"
import bussinessLaw1 from "../../assets/law/bussinessLaw1.png"
import elderAbuse from "../../assets/law/elderAbuse.png"
import landlordDisputes from "../../assets/law/landlordDisputes.png"
import partnershipLaw from "../../assets/law/partnershipLaw.png"
import realEstateLaw from "../../assets/law/realEstateLaw.png"
import { Translate } from "@mui/icons-material";

const images = [
    {
        id: 1,
        title: "BUSINESS LAW",
        image: bussinessLaw,
        title1: "Partnership LAW",
        image1: partnershipLaw
    },
    {
        id: 3,
        title: "REAL ESTATE LAW",
        image: realEstateLaw,
        title1: "BUSINESS LAW",
        image1: bussinessLaw1
    },
    {
        id: 5,
        title: "LANDLORD DISPUTES",
        image: landlordDisputes,
        title1: "ELDER ABUSE",
        image1: elderAbuse
    },
]

const LawSection = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" marginBottom="100px">
                Area of Practices
            </Typography>
            <Box className={styles.imageWrapper}>
                {
                    images.map((data) => {
                        return (
                            <Box key={data.id} sx={{ display: 'flex', gap: 3, marginBottom: '20px' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <img src={data.image} alt={data.title} />
                                    <Box sx={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <Typography>
                                            {data.title}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ position: 'relative' }}>
                                    <img className={styles.image} src={data.image1} alt={data.title1} />
                                    <Box sx={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <Typography>
                                            {data.title1}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Container>
    )
}

export default LawSection