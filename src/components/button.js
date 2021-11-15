/* eslint-disable*/
 function Button(props) {
     return ( <
         button type = "button"
         onClick = { props.storeFunc }
         value = { props.value }
         className = { props.className }
         id = { props.id } >
         { ' ' } { props.value } { ' ' }

         <
         /button>
     );
 }

 export default Button;