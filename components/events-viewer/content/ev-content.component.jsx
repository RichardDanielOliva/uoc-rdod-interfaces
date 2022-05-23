import React, { useState } from 'react';
import { ShareIcon, HeartIcon, FillHeartIcon } from '../../../config/styles/icons-styles';
import { getResourcesImageById } from '../../../config/styles/images-styles';
import { ContentOptionsButton,EventContentCardContainer, EventContentOptionContainer, EventDescription, EventDescriptionContainer, EventHeaderContainer, EventSubtitle, IconContainer, OtherOptionsButton } from '../event-viewer-card.styles';

export const COMMON_DESCRIPTION = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel congue risus, ut tempus nunc. Nam blandit ligula id nulla viverra, vitae interdum neque finibus. Etiam luctus sollicitudin felis. Aenean elementum viverra dui a semper. Praesent egestas ante nisi, convallis consequat turpis pellentesque sit amet. Vivamus sit amet commodo nibh. Morbi finibus odio ligula, quis gravida nulla convallis vitae. Praesent cursus efficitur magna quis blandit. In ut ornare ligula.</p><p>Maecenas augue mauris, laoreet rhoncus lectus eget, tristique ultricies odio. Donec vestibulum augue ultrices, commodo sapien ut, pharetra ante. Morbi gravida, quam in lobortis viverra, est nisl convallis diam, ac imperdiet leo nulla a lectus. Vivamus porta sollicitudin blandit. Nullam fermentum, nisl ut vulputate feugiat, libero risus iaculis ante, nec hendrerit eros sem eu lacus. Fusce euismod auctor neque, eu facilisis sem egestas sit amet. Nullam tincidunt consectetur augue, ut fringilla erat consectetur non. Fusce justo enim, lacinia ut augue quis, molestie convallis nisi. Quisque lacinia elementum ullamcorper. Donec ultrices diam ut bibendum aliquam. Curabitur sed viverra nisl. Integer pharetra nisi id ante pretium, vel mollis tortor volutpat.</p><p>Vivamus eleifend eros mollis turpis congue, quis maximus magna fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis mauris facilisis arcu congue, at congue metus commodo. Fusce sit amet sapien dui. Cras efficitur magna felis, in pellentesque metus rutrum ut. Donec sed metus eget augue egestas luctus ac vitae magna. Quisque faucibus tortor et lacus cursus dapibus. Duis lacinia felis elit, id commodo enim viverra eget.</p><p>In a consectetur metus. Duis eleifend facilisis suscipit. Aenean rhoncus metus id convallis consectetur. Nullam porta, arcu sed hendrerit porta, sem ligula ultrices odio, in maximus erat sem eget arcu. Suspendisse vel euismod est. Aliquam consequat, nulla sit amet ullamcorper feugiat, velit leo egestas augue, quis lacinia massa neque sit amet metus. Maecenas hendrerit velit eu enim euismod, sed tincidunt lectus blandit.</p>';

const EventContentCard = ({ event }) => {
  let [isSelected, setIsSelected] = useState(false);
  return (<EventContentCardContainer>
    <EventHeaderContainer>
      {getResourcesImageById(event.image)}
    </EventHeaderContainer>
    <EventContentOptionContainer>
    <ContentOptionsButton>
      <IconContainer>
        <ShareIcon />
      </IconContainer>
        Compartir
      </ContentOptionsButton>
      <ContentOptionsButton isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
      <IconContainer >
        {
          isSelected ? 
            <FillHeartIcon /> : 
            <HeartIcon />
        }
      </IconContainer>
        Favoritos
      </ContentOptionsButton>
    </EventContentOptionContainer>
    <EventDescriptionContainer>
      <EventSubtitle>Acerca de este evento</EventSubtitle>
      <EventDescription dangerouslySetInnerHTML={{ __html: COMMON_DESCRIPTION }}  />
    </EventDescriptionContainer>
  </EventContentCardContainer>
  );
};

export default EventContentCard;