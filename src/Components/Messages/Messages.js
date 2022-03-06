import React from 'react';
import { Row } from 'react-bootstrap';
import {
  MessageContainer,
  InboxContainer,
  FilterContainers,
  ShowMessagesContainer,
} from './styled';
import EmptyChat from '../../Assets/Pictures/EmptyChat.png';

export const Messages = () => (
  <MessageContainer>
    <Row id="message-container-row">
      <InboxContainer sm={4} md={5} xs={12}>
        <div id="inbox-text">
          <h4>INBOX</h4>
        </div>
        <div id="filters">
          <p>Quick Filters</p>
          <FilterContainers>
            <div>All</div>
            <div>Unread Chats</div>
            <div>Important</div>
          </FilterContainers>
        </div>
        <div id="all-chats">
          <img src={EmptyChat} alt="Empty Chat" />
          <div>No chats basis current filter slection</div>
        </div>
      </InboxContainer>
      <ShowMessagesContainer sm={8} md={7}>
        <div>
          <img src={EmptyChat} alt="Empty Chat" />
          <div>Select a chat to view conversations</div>
        </div>
      </ShowMessagesContainer>
    </Row>
  </MessageContainer>
);
