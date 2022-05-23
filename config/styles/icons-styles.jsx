import React from "react";
import styled from "styled-components";
import { FaCcVisa, FaCcMastercard, FaCreditCard, FaCalculator, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { HiOutlineMail, HiPhone, HiChevronDown, HiChevronUp, HiOutlineInformationCircle, HiOutlineXCircle } from "react-icons/hi";
import { IoIosGitNetwork } from "react-icons/io";
import { IoArrowForwardCircleOutline, IoAddCircleOutline, IoSunnyOutline, IoDocumentTextOutline } from "react-icons/io5";
import { RiHeartPulseLine, RiToolsLine, RiVirusLine } from "react-icons/ri";
import { VscCheck, VscClose } from "react-icons/vsc";
import { GiFactory, GiWindTurbine, GiSellCard } from "react-icons/gi";
import { BsGraphUp, BsFillShareFill, BsHeart, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOndemandVideo, MdOutlineDesignServices, MdLightbulbOutline, MdLocationOn, MdComputer, MdDateRange } from "react-icons/md";
import { BiMessageDetail, BiSearchAlt2 } from "react-icons/bi";
import { CustomIconImage } from "./images-styles";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const getHelpIcon = (id) => {
    switch (id) {
        case 'contact-support':
            return <WhitePhoneIcon/>
        case 'get-tkrisk':
            return <TKRISKIcon/>
        case 'tutorials':
            return <TutorialIcon/>
        case 'documentation':
            return <DocuIcon />
        case 'tkrisk-Answers':
            return <MessageIcon/>
        case 'videos':
            return <VideoIcon />
        case 'resources':
            return <ResourcesIcon />
        case 'phoneIcon':
            return <PhoneIcon />
        case 'supportIcon':
            return <ToolsIcon />
        case 'calcIcon':
            return <CalculatorIcon />
        default:
            return <CalculatorIcon />
    }
}

export const getSocialMediaIcon = (id) => {
    switch (id) {
        case 'Linkedin':
            return <LinkedInIcon />
        default:
            return null
    }
}

export const getSolutionsIcon = (id) => {
    switch (id) {
        case 'carbonStorage':
            return <FactoryIcon/>
        case 'climateChange':
            return <SunIcon/>
        case 'technology':
            return <TechIcon/>
        case 'insurance': 
            return <InsuranceIcon/>
        case 'finance':
            return <FinanceIcon/>
        case 'health':
            return <HealthIcon/>
        case 'energy':
            return <EnergyIcon/>
        case 'covid19':
            return <VirusIcon/>
        case 'Linkedin':
            return <LinkedInIcon />
        case 'seeMore':
            return <RightArrowircleIcon />
        default:
            return <LinkedInIcon />
    }
}

export const getPaymentMethodIcon = (branch) => {
    switch (branch) {
        case 'visa':
            return <VisaCardIcon/>
        case 'mastercard':
            return <MasterCardIcon/>
        default:
            return <CardIcon />
    }
}

export const VisaCardIcon = styled(FaCcVisa)`
    width: 100%;
    height: 100%;
    fill: rgb(0, 87, 159);
`;

export const MasterCardIcon = styled(FaCcMastercard)`
    width: 100%;
    height: 100%;
`;

export const CardIcon = styled(FaCreditCard)`
    width: 100%;
    height: 100%;
`;

export const companyIcon = styled((props) => (
    <CustomIconImage src={'/icons/company_logo.svg'} {...props} />
  ))`
    padding: 5px;
`;

export const SearchIcon = styled(BiSearchAlt2)`
    width: 100%;
    height: 100%;
`;

export const LocationIcon = styled(MdLocationOn)`
    width: 100%;
    height: 100%;
`;

export const DateIcon = styled(MdDateRange)`
    width: 100%;
    height: 100%;
`;

export const SellIcon = styled(GiSellCard)`
    width: 100%;
    height: 100%;
`;

export const WeatherIcon = styled(TiWeatherPartlySunny)`
    width: 100%;
    height: 100%;
`;

export const ServicesIcon = styled(MdOutlineDesignServices)`
    width: 100%;
    height: 100%;
`;

export const ShareIcon = styled(BsFillShareFill)`
    width: 100%;
    height: 100%;
`

export const HeartIcon = styled(BsHeart)`
    width: 100%;
    height: 100%;
`

export const FillHeartIcon = styled(BsFillHeartFill)`
    width: 100%;
    height: 100%;
`

export const EmailIcon = styled(HiOutlineMail)`
    width: 100%;
    height: 100%;
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
    width: 100%;
    height: 100%;
`;

export const AlignIcon = styled(FiAlignJustify)`
    width: 100%;
    height: 100%;
`;

export const UserCircleCloseIcon = styled(AiOutlineUser)`
    width: 100%;
    height: 100%;
`;

export const UserCircleCloseIconAdd = styled(AiOutlineUserAdd)`
    width: 100%;
    height: 100%;
`;

export const PhoneIcon1 = styled(HiPhone)`
    width: 100%;
    height: 100%;
`;
export const ToolsIcon1 = styled(RiToolsLine)`
    width: 100%;
    height: 100%;
`;
export const DownArrowIcon = styled(HiChevronDown)`
    width: 100%;
    height: 100%;
`;

export const UpArrowIcon = styled(HiChevronUp)`
    width: 100%;
    height: 100%;
`;

export const InfoIcon = styled(HiOutlineInformationCircle)`
  width: 100%;
  height: 100%;
`;

export const CircleCloseIcon = styled(HiOutlineXCircle)`
  width: 100%;
  height: 100%;
`;

export const CircleAddIcon = styled(IoAddCircleOutline)`
  width: 100%;
  height: 100%;
`;

export const RightArrowircleIcon = styled(IoArrowForwardCircleOutline)`
    width: 100%;
    height: 100%;
`;

export const CCheckIcon = styled(VscCheck)`
    width: 100%;
    height: 100%;
    color: green;
`;

export const CCloseIcon = styled(VscClose)`
    width: 100%;
    height: 100%;
    color: red;
`;

export const VirusIcon = styled(RiVirusLine)`
    width: 100%;
    height: 100%;
`;

export const EnergyIcon = styled(GiWindTurbine)`
    width: 100%;
    height: 100%;
`;

export const HealthIcon = styled(RiHeartPulseLine)`
    width: 100%;
    height: 100%;
`;

export const FinanceIcon = styled(BsGraphUp)`
    width: 100%;
    height: 100%;
`;

export const InsuranceIcon = styled(AiOutlineSafety)`
    width: 100%;
    height: 100%;
`;

export const TechIcon = styled(IoIosGitNetwork)`
    width: 100%;
    height: 100%;
`;

export const SunIcon = styled(IoSunnyOutline)`
    width: 100%;
    height: 100%;
`;

export const FactoryIcon = styled(GiFactory)`
width: 100%;
height: 100%;
`;

export const DocuIcon1 = styled(IoDocumentTextOutline)`
width: 100%;
height: 100%;
`;

export const VideoIcon1 = styled(MdOndemandVideo)`
width: 100%;
height: 100%;
`;

export const ResourcesIcon1 = styled(MdLightbulbOutline)`
width: 100%;
height: 100%;
`;

export const TutorialIcon1 = styled(MdComputer)`
width: 100%;
height: 100%;
`;


export const MessageIcon1 = styled(BiMessageDetail)`
    width: 100%;
    height: 100%;
`;


