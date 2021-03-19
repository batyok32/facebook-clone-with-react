import { Avatar } from '@material-ui/core'
import ChatIcon from "@material-ui/icons/Chat"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import PeopleIcon from "@material-ui/icons/People"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
           
        </div>
    )
}

export default Sidebar
