export const generateID=()=>{
    const newDate=new Date().getTime()
    const numRandom=Math.random()
    return newDate+numRandom
}