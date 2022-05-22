import { useMsal } from "@azure/msal-react";
import { BroadcastChannel } from "broadcast-channel";
import { loginRequest, signUpRequest } from "../../../config/msal_b2c_config";
import { UserCircleCloseIcon, UserCircleCloseIconAdd } from "../../../config/styles/icons-styles";
import Cookies from "universal-cookie";

import {
  FormCard,
  CardFooter,
  CustomButtonsContainer,
  CustomButtonContainer,
  IconContainer,
  MessageLinkContainer,
  CustomButton,
  CustomLink,
} from "./custom-form.style";

const CustomForm = ({
  id = "custom-form",
  className = "custom-form",
  form,
}) => {
  const { instance } = useMsal();

  let {
    footer: { button = {}, messages = [] },
  } = form;

  const msalHandler = (customEvent) => () => {
    let msalRequest;
    if (customEvent === "signIn") {
      msalRequest = loginRequest;
    } else {
      msalRequest = signUpRequest;
    }


    const cookies = new Cookies();
    cookies.remove('msal.interaction.status');

    instance
      .loginRedirect(msalRequest)
      .then((response) => {
        new BroadcastChannel("auth_channel").postMessage("login");
      })
      .catch((e) => {
        // Error notifications are handled in layour-auth.component.jsx
        console.warn(e);
      });
  };

  return (
    <section>
      <FormCard className={className}>
        <CardFooter>
          {messages.map(({ text, link }) => (
            <MessageLinkContainer key={`${id}-footer-message-${text}`}>
              {text}
              <CustomLink href={link.url}>{link.name}</CustomLink>
            </MessageLinkContainer>
          ))}
          <CustomButtonsContainer>
            <CustomButtonContainer className={`${className}-footer-button`} onClick={msalHandler("signIn")}>
              <IconContainer><UserCircleCloseIcon/></IconContainer>
              <CustomButton className={`${className}-footer-button`}>
                {button.name}
              </CustomButton>
            </CustomButtonContainer>
            <CustomButtonContainer className={`${className}-footer-button`} onClick={msalHandler("signUp")}>
            <IconContainer><UserCircleCloseIconAdd/></IconContainer>
              <CustomButton className={`${className}-footer-button`}>
                {"Sign up"}
              </CustomButton>
            </CustomButtonContainer>
          </CustomButtonsContainer>
        </CardFooter>
      </FormCard>
    </section>
  );
};

export default CustomForm;
