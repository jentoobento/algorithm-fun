/**
 * given an array of strings, find the domain names, sort them alphabetically, separated by semicolon.
 * a valid url is only valid if it starts with 'http' or 'https'
 * a domain name may be preceeded by 'www', 'ww2', or 'web'
 * the preceeding part of the domain name is not part of the domain name -> 'www.hello.com' should be: 'hello.com'
 * a domain name may be followed by a path or series of paths preceeded by a forward slash
 * the path is not part of the domain name -> 'hello.com/homepage' should be: 'hello.com'
 */

let lines = [
  "the following is a popular website: http://www.abc.com/hi",
  "hello there",
  "go to https://www.abc.com/hey to see more",
  "http://web.xyz.com is also a good site",
  "http://hello.com is my homepage and http://hello.page.com/page1",
  "or check out https://www.hello.this.is.me.com/first/second/third",
  "bye"
];

function extractDomainNames(lines) {
  let allUrls = [];
  let allDomains = [];

  // first find all valid urls present within the sentence
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].split(" ");
    for (let j = 0; j < line.length; j++) {
      if (line[j].includes("https://") || line[j].includes("http://"))
        allUrls.push(line[j]);
    }
  }

  // then extract only the domains from the Urls captured above
  for (let i = 0; i < allUrls.length; i++) {
    let section = allUrls[i].split("/")[2];
    let prefix = section.split(".")[0];
    if (prefix === "www" || prefix === "ww2" || prefix === "web") {
      allDomains.push(section.split(".").splice(1).join("."));
    } else {
      allDomains.push(section);
    }
  }

  // modify and present result
  let newSet = new Set(allDomains.sort()); // sort and remove duplicates
  return [...newSet].join(";");
}

console.log(extractDomainNames(lines));
