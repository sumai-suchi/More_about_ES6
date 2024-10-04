const user={
    phone:
    {
        nam:'sumsug',
        price:50000,
        color:'black',
        hand:
        {
            first:'yes',
            second:'no',
        }
    }
}

console.log(user.phone.hand.second);
console.log(user.phone.hander?.second);//? its called optional chain if I dont have the property
//like above handler we can use ? this then it wonn't show typeerror. it will show undefined.