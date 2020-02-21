import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '286h55j0khdi',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'MvYt4Cy8k4GHZdFOJJUGbCwUOtAY6jdPsa255R-jw80'
});
