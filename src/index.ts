import "./styles/index.scss";

console.log('Hello World Index');
 
const obj={
    a:"apple",
    b:"orange",
    c:{
        cd:'cheese'
    }
};

if(module.hot)
{
    module.hot.accept();
}

console.log(obj?.c?.cd, obj?.f?.fa);