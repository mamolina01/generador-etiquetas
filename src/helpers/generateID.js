export const generateID=()=>{
    const newDate=new Date().getTime()
    const numRandom=Math.random(0,100)
    const id=(newDate+numRandom).toFixed()
    return id
}