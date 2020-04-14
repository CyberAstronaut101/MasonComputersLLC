---
title: "How to Setup Github Pages with Custom Domain Name"
date: "2020-04-14"
author: "Elliot"
authorTwitter: "codemaster113" #do not include @
cover: "/assets/img/posts/github_pages/github_domain_post.png"
tags: ["github", "DNS", "hugo", "webDevelopment"]
keywords: ["how do I add custom domain name to github pages", ""]
description: "Step by Step tutorial on how to add a custom domain name to a GitHub Pages site"
showFullContent: false
---

This article details the steps needed to add a custom domain name to a github pages website.

Github Pages is a static hosting service that is able to host HTML, CSS, and JavaScript from a repository on GitHub.


## Quick Jump
---
> - [Domain](#domain-name)
> - [Github Pages](#github-pages)
> - [DNS Settings](#dns-settings)
> - [Enable HTTPS](#enable-HTTPS)



### Domain
---

Google Domains

Picture of the DNS settings page

### Github Pages
---

Links for how to get started

Once you have it, show that ejmason101.github.io will serve

Show setting pictures

1. Create Repo that has the name `<UserName>.github.io` on github, add your static website files to it.

2. Add a CNAME file in the repo with the following, changing the domain name information to match the domain you own:

```shell
masoncomputers.com
www.masoncomputers.com
```

3. Push to github

```shell
git add -A 
git commit -m 'add CNAME file'
git push origin master
```

4. Modify Project Settings

Within the new project you created, navigate to `Settings -> Options -> GitHub Pages` and add your domain name to the `Custom Domain` box

![Github Settings](/assets/img/posts/github_pages/github_settings.png)

HTTPS is not enabled yet, but after the DNS settings are updated we will revisit this panel.


# DNS Settings

---

You will need to update your DNS settings for your domain name, which require you to login to your domain provider. Since I am using google domains, `domains.google.com`.

Navigate to your `DNS` settings on the left nav bar to add the required resource records. 

![Google Domain Nav](/assets/img/posts/github_pages/domains_dns_settings.png)


And then navigate to the `Custom Resource Records` table. 


## Adding A Record

An `A Record` maps a domain name to the IP address of the server hosting the website, In this case, GitHub Pages. This is `NOT four A Records`, instead add one A record and `add all IPs under that one A Record`.

![domains a record](/assets/img/posts/github_pages/domains_a_record.png)

> Note: The IP's shows in this picture may be outdated. To get the current IP's check [Github Pages Documentation](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/?target=_blank).



## Adding CNAME Record

Then add a `CNAME` record, replacing the address (`ejmason101.github.io`) with the one you are working with.

![domains cname setting](/assets/img/posts/github_pages/domains_cname_setting.png)

> Note: It may take up to 48 hours for these changes in DNS to be reflected.

To check on the status of the new records being shown in DNS, use the following command to check that the domain is returning. 

```shell
dig www.masoncomputers.com +nostats +nocomments +nocmd
```
Which should return the below once the changes have applied:

```shell
www.masoncomputers.com. 3599    IN      CNAME   ejmason101.github.io.
ejmason101.github.io.   3599    IN      A       185.199.110.153
ejmason101.github.io.   3599    IN      A       185.199.109.153
ejmason101.github.io.   3599    IN      A       185.199.108.153
ejmason101.github.io.   3599    IN      A       185.199.111.153
```


### Enabling HTTPS

---

Once you have prepped the project with the `CNAME` file, updated the DNS settings with your domain provider, and your domain resolves to your project, HTTPS can be enabled.

Revisit `Settings -> Options -> GitHub Pages` and remove your domain from the `Custom Domain` input. Save. Then check `Enforce HTTPS`, re-enter your domain and save. 

![GitHub HTTPS](/assets/img/posts/github_pages/github_settings_https.png)

Once this resolves, remove the custom domain, save, then re-enable HTTPS and add the custom domain name again

> Note: If you get the `NX_INVALID_CERT` error when you try to visit your website after enabling HTTPS: 
Clear browser cache. What happened here was that your domain might have already had a different HTTPS cert associated with it that was there before you moved to github pages. Since its the same domain name, but two different certs this is a warning about a possible man in the middle (MITM) attack because of the cert change. 