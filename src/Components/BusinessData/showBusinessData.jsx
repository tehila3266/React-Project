import { observer } from "mobx-react-lite";
import mainStore from '../../Store/mainStore';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
// import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
const ShowBusinessData = (observer(() => {

    return (<>
        <div className="ShowBusinessData">
            <h2>{mainStore.tempBusinessData.name}</h2>
            <h3><HomeIcon />{mainStore.tempBusinessData.address}
            <CallIcon /> {mainStore.tempBusinessData.phone}</h3>
            <h4>{mainStore.tempBusinessData.owner}
            {mainStore.tempBusinessData.logo}
            {mainStore.tempBusinessData.description}</h4></div>

    </>)
}))

export default ShowBusinessData

