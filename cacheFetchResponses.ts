/**
 * Write a function that takes a function as an argument
 * and returns a new function. If the function has already 
 * ran with the same arguments, return the cached result
 * instead of running the function again.
 * 
 * Two simple functions are given: a simple string manipulation
 * function that sorts the params of a url and returns the url
 * string, and a simulated fetch function that calls a url.
 *
 * The factory function should simulate preventing calling
 * the same API if an identical call has been made previously.
 *
 * Only use javascript. Do not use any caching properties
 * from `fetch`, cookies, local storage, etc.
 * 
 * Assumptions:
 * The arguments of the string and fetch functions will
 * always be a valid url string.
 */

const simpleStringFunction = (url: string) => {
  console.log('Simple String Function ran', url)
  
  const allParams = url.split('?')
  let output = allParams[0]
  
  if (allParams[1]) {
    const sortedParams = allParams[1].split('&').sort();
    output += `?${sortedParams.join('&')}`
  }

  return output
}

const simpleFetchFunction = async <T>(url: string): Promise<T> => {
  console.log('Simple Fetch Function ran', url)

  const response = await fetch(url);
  return await response.json()
}

const memoizedFactoryFunction = <T, K>(func: (arg: K) => Promise<T>) => {
  // Create simple cache to hold the results of func()
  const cache: { [key: string]: Promise<T> } = {}

  console.log('Factory Function ran')

  // Access the arguments of func()
  return (args: K): Promise<T> => {
    // Create simple key using the arguments of func()
    // const cacheKey = [...args].join()
    
    // Using stringify instead of the above because
    // Typescript doesn't know how to spread and
    // join K since K is a generic.
    const cacheKey = JSON.stringify(args);
    
    // If the arguments of func() aren't found in the cache,
    // run func() and add it to the cache.
    if (!cache[cacheKey]) {
      cache[cacheKey] = func(args)
    }
    
    // If the arguments of func() were found in cache, do
    // not run func() again and just return the value in cache.
    return cache[cacheKey]
  }
}

const myMemoizedFunction = memoizedFactoryFunction<string, string>(simpleFetchFunction)

// simpleFetchFunction should run.
myMemoizedFunction(simpleStringFunction('http://www.test.com?a=2'))

// simpleFetchFunction should run again since the params have changed.
myMemoizedFunction(simpleStringFunction('http://www.test.com?a=3&b=2&c=1'))

// simpleFetchFunction should not run since the params have not changed.
myMemoizedFunction(simpleStringFunction('http://www.test.com?a=3&b=2&c=1'))

// simpleFetchFunction should not run since the param order has changed
// but the params themselves have not changed.
myMemoizedFunction(simpleStringFunction('http://www.test.com?b=2&a=3&c=1'))
