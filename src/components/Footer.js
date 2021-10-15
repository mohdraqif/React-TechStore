import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-4">
              <div className="row">
                <div className="col-md-6 px-5">
                  <p className="text-capitalize mt-4">
                    copyright &copy; Book store {new Date().getFullYear()}. all
                    rights reserved{" "}
                  </p>
                </div>
                <div className="col-md-6 pl-5 justify-content-around mt-4">
                  {value.socialIcons.map(item => (
                    <a href={item.url} key={item.id} className='m-3'>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
