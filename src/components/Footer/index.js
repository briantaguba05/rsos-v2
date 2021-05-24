import React from 'react'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>@NU</FooterLink>
                            <FooterLink to='/signin'>Contact Us</FooterLink>
                            <FooterLink to='/signin'>Terms and Conditions</FooterLink>
                            <FooterLink to='/signin'>Privacy Policy</FooterLink>
                    
                    </FooterLinkItems>
                </FooterLinksWrapper>

            </FooterLinksContainer>
        </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
