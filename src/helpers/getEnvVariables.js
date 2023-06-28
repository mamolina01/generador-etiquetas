export const getEnvVariables=()=>{

    import.meta.getEnvVariables

    return{
        ...import.meta.env
    }
}