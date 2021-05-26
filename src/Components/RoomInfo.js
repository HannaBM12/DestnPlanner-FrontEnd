
import React from "react";
import {  List } from 'semantic-ui-react'

function RoomInfo({searchItem, setSearchItem}) {

    
  return (
        
        <List>
            <List.Item>
            <List.Icon name='hotel'/>
            <List.Content>King bed</List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='hotel' />
            <List.Content>Queen Bed</List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='hotel' />
            <List.Content>Single Bed</List.Content>
            </List.Item>
            {/* <List.Item>
            <List.Icon name='hotel' />
            <List.Content>
                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
                <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
            </List.Content>
            </List.Item> */}
        </List>

  );
}

export default RoomInfo;