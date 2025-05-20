export default function Tabs({ children, buttons, buttonsContainer}){
    //if we pass ButtonContainer instead of buttonsContainer it will work because then
    // react will check for custom component rather than default
   const ButtonsContainer = buttonsContainer
   return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}