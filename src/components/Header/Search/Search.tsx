import styled from "@emotion/styled"
import { AiOutlineSearch } from "react-icons/ai"
import { useAppSelector } from "src/services/hooks"
import { useDispatch } from "react-redux"
import { searchButtonClicked, closeSearchbar } from "./searchSlice"

export function Search() {

    const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pontano Sans';
    font-size: 20px;
    line-height: 20px;
    width: 100%
    justify-content: space-between;
  `
    const StyledLogoWrapper = styled.div`
        background-color: ${props => props.theme.colors.secondary};
        height: 57px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1pt black solid;
        width: 31px;
    `

    const StyledInputWrapper = styled.div`
        width: 100%;
        position: relative;
    `
    const StyledInput = styled.input`
        width: 100%;
        height: 57px;
        position: relative;
        text-indent: 20px;
        font-size: 15px;
        font-family: 'Pontano Sans';
    `
    const StyledCancelButton = styled.button`
        position: absolute;
        right: 15px;
        top: 33%;
        background-color: white;
        border: none;
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
    `
    const dispatch = useDispatch();
    const clickCancelButton = useAppSelector(searchButtonClicked);

    return(
        <StyledWrapper>
                <StyledLogoWrapper>
                    <AiOutlineSearch></AiOutlineSearch>
                </StyledLogoWrapper>
                <StyledInputWrapper>
                    <StyledInput 
                        type = 'text'
                        placeholder="Type your search here"
                        >
                    </StyledInput>
                    <StyledCancelButton onClick={() => dispatch(closeSearchbar(clickCancelButton))}>CANCEL</StyledCancelButton>
                </StyledInputWrapper>
        </StyledWrapper>
    )
        
}