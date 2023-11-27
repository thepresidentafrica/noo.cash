export class HooksService {
   static github = async (metaData:any) => {
       try {
        console.log("metaData", metaData)
        return {
            message: 'GitHub Webhook received successfully!'
        }
       } catch (error) {
        
       }
   }

}