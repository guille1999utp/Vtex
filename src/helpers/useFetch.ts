const sitioUrl = 'https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/';
export const useFetch = async (endpoint:string) =>{
            const url = `${ sitioUrl }/${ endpoint }`;
            const resp = await fetch( url );
            return await resp.json();
    }