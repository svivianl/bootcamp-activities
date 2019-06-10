# Lecture notes
  

Use `<>`and `</>`to wrap html elements so you don't need to wrap into a *div*. The difference is that `<>` is not going to creat a *div* or any other element.
```
return(
  <>
  ...
  </>
)

```

# Notes JWT

## project

```
// https://www.techynovice.com/setting-up-JWT-token-refresh-mechanism-with-axios/
      // const AuthStr = 'Bearer ' + user.token;
      // console.log("AuthStr-----------------------------");
      // console.log(AuthStr);
      // const { data } = await axios({
      //   method: 'GET',
      //   url: `${url}/workouts`,
      //   headers: {
      //     'Authorization': AuthStr,
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // })

      const workoutUrl = `${url}/workouts`;
      const AuthStr = 'Bearer ' + user.token;

      const headers= { 'Authorization': AuthStr } ;
      const config = {
        headers: new Headers({
           'Authorization': AuthStr,
           'withCredentials': 'true',
           'Content-Type': 'application/x-www-form-urlencoded'
         })
        // {
        //   'Authorization': AuthStr,
        //   'Content-Type': 'application/json'
        // }
      };
      const configStr = JSON.stringify( config );
      const obj = {
        method: 'GET',
        url: workoutUrl,
        withCredentials: true,
        credentials: 'include',
        headers: JSON.stringify(headers)
      }
      const obj2 = {
        method: 'GET',
        // withCredentials: true,
        // credentials: 'include',
        headers: new Headers({
           'Authorization': AuthStr,
           'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '',
            'Host': url
           // 'Content-Type': 'application/x-www-form-urlencoded'
         })
      }

      console.log("AuthStr-----------------------------");
      console.log(AuthStr);

      // user22@test.com

      // axios(obj)
      // fetch(workoutUrl, obj2)
      //this does not give error
      // axios.get(workoutUrl, configStr)
      // .then(data =>{
      //   console.log("data workout------------------------");
      // console.log(data);
      // })

      const customAxios = axios.create();
      customAxios.defaults.headers.common['Authorization'] = AuthStr;
      // console.log(instance.defaults.headers);
      customAxios.get(workoutUrl, configStr)
      .then(data =>{
        console.log("data workout------------------------");
        debugger;
      console.log(data);
      })
      // console.log("data workout------------------------");
      // console.log(data);
      // setWorkout(data);
```
