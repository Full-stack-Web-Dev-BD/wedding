import React, { useState, useEffect } from "react";
import styled from "styled-components";




const Main = styled("div")`
  display:'inline-block'
`;

const DropDownContainer = styled("div")`
  width: 170px;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  padding: 10px ;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  border-radius:40px;
  color: #2B3240;
  background: #ffffff;
  cursor:pointer;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  cursor:pointer;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  color: #2B3240;
  font-size: 1rem;
  font-weight: 500;
  
  position:absoulte;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 1.4em;
`;


export default function SelectOption({options,placeHolder,width}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main style={{display:'inline-block'}}>
      <DropDownContainer style={{display:'inline-block ',border:'1px solid #E2E2E2',borderRadius:'30px'}}>
        <DropDownHeader onClick={toggling} >
          <span style={{paddingLeft:'18px'}} >{selectedOption || placeHolder}</span>
          <i class="fas fa-angle-down" style={{paddingRight:'16px',float:'right',lineHeight:'1.7'}}/>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer style={{position:'absolute'}}>
            <DropDownList style={{borderRadius:'26px',minWidth:width?width:'170px'}}>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}