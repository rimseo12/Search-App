const $ = target => {
    return document.querySelector(target)
  }
  
  const objectToQueryString = parameters => {
      const queries = []   
      
      for(let key in parameters){
          queries.push(`${key}=${parameters[key]}`)
      }
  
      console.log('결과:',queries.join('&'))
  
      return queries.join('&')
  }
  
  export { $,objectToQueryString }
  