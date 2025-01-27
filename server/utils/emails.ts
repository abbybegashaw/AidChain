export const wrapEmail = (content: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to AidChain</title>
  
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
  
        <style>
           body {
           margin: 0;
           padding: 0;
           background-color: rgb(233, 233, 244);
           color: black;
           font-family: helvetica;
           display: flex;
           justify-content: center;
           align-items: center;
           min-height: 100vh;
           font-family: "Inter", sans-serif;
           text-align: center;
           line-height: 28px;
           }
  
           .date {
              color: white;
              height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
           }

           .button {
            background: #085CF0;
            color: white;
            padding: 14px 24px;
            border: 0;
            font-weight: semibold;
            font-size: 16px;
          }

          a {
            text-decoration: none;
          }
  
           .yellow-text {
              color: #FFBB0B;
           }
           .blue-text {
              color: #085CF0;
           }
           .content {
              color: #0D1342;
              font-size: 16px;
           }

           .email-heading {
            font-size: 20px;
            font-weight: 500;
           }
           .p {
            margin-top: 18px;
            font-size: 16px;
            line-height: 22px;
           }
  
        </style>
     </head>
     <body style="margin: 0; padding: 0; color: black;">
        <center>
           <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="border-collapse: collapse; max-width: 720px; min-width: 300px;">
              
              <!--Header-->
              <tr style="background-color: #0D1342">
                 <td style="padding: 25px 25px; display: flex; gap: 20px; justify-content: space-between;">
                      <img data-imagetype="External"  src="${process.env.CONTENT_URL}/newDesign/logo-slidebar.png" alt="AidChain Logo" style="height: 44px;">
                  </td>
              </tr>
  
              <!--Cover-->
              <tr style="background: white;">
                 <td>
                      <img data-imagetype="External" src="${process.env.CONTENT_URL}/email-cover.png" style="width: 100%;" >
                 </td> 
              </tr>
  
              <!--Content-->
              <tr class="content">
                 <td style="padding: 20px 25px; background: white">
                    ${content}
  
                    <div style="display: flex; gap: 8px; align-items: center;">
                      <div style="width: 20px; height: 1px; background: #9DA4B3"></div>
                      <span>AidChain Team</span>
                    </div>
                 </td>
              </tr>
  
  
              <tr>
               <td style="padding: 20px 25px; background-image: url(${process.env.CONTENT_URL}/email-footer-bg.png); background-size: cover; height: 60px">
               <table style="width: 100%">
                  <tr style="width: 100%">
                  <td style="width: 30%"><span></span></td>
                  <td><center><a href="https://www.linkedin.com/in/AidChain-ai" target="_blank"><img src="${process.env.CONTENT_URL}/in.png" height="24px"></a></center></td>
                  <td><center><a href="https://twitter.com/AidChain_ai" target="_blank"><img src="${process.env.CONTENT_URL}/x.png" height="24px"></a></center></td>
                  <td><center><a href="https://www.instagram.com/AidChain_ai" target="_blank"><img src="${process.env.CONTENT_URL}/insta.png" height="24px"></a></center></td>
                  <td style="width: 30%"><span></span></td>
                  </tr>
               </table>
               </td>
            </tr>
           </table>
        </center>
     </body>
  </html>

    `;
};
