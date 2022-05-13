import React from 'react'
import styled from 'styled-components'


const Hero= ()=>{
    return (
        <Container>
            <Wrapper>
                <Left>
 <LeftWrap>
     <h1>Destiny Stomach Care</h1>
<div>Food You Love At your Palm and sight</div>
<button>View menu</button>
 </LeftWrap>
                </Left>
                <Right> 
                    <img src = "/hero.jpg" alt ="hero"/>
                </Right> 
            </Wrapper>
        </Container>
    )
}

export default Hero
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
background:#eee;
margin-top:30px;
@media(min-width:330px) and (max-width:400px){
    
    margin-top:0
     
}



/* background:#122 */
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
@media(min-width:330px) and (max-width:400px){
    
    flex-direction:column-reverse;
     
}
`
const Left = styled.div`

h1{
    font-size:2.5rem;
    color:green
}
div{
    font-size:1.5rem
}
@media(min-width:330px) and (max-width:400px){
    
h1{
    font-size:2rem;
}
div{
    font-size:1.2rem
}
     
}
`
const LeftWrap = styled.div`

button{
    background:green;
    outline:none;
    border:none;
    padding:10px 40px;
    border-radius:20px;
    color:white;
    margin-left:120px;
    margin-top:20px;
    font-size:18px;
    :hover{
        transform :scale(1.05);
        transition:all 300ms;
        cursor :pointer
    }
}
`
const Right = styled.div`
width:700px;

img{
    width:100%;
    object-fit:contain
}
@media(min-width:330px) and (max-width:400px){
    
    width:330px; 
    img{
        width:100%;
        object-fit:contain
    }
     
}
`