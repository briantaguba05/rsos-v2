import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, #d8c3a5, #fff);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  } ;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top 8px;

    }
`;

export const Form = styled.div`
  background: #9ba0ab;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton1 = styled.button`
  background: #fff;
  padding: 16px 0;
  border: none;
  border-radius: 40px;
  color: #8e8d8a;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #14213d;
    color: #fff;
  }
`;

export const FormButton2 = styled.button`
  background: #e85a4f;
  padding: 32px 0;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #d90429;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #ffb238;
  font-size: 14px;

  &.hover {
    cursor: pointer;
    color: #4213D;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
`;
