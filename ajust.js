(function(){document.addEventListener("DOMContentLoaded",function(){var e,t,n,i,l,s;for(e=new Utilities,e.setTimezoneCookies(),document.querySelector("#signup_website_url"),document.querySelector("#signup_name"),document.querySelector("#signup_company_name"),n=document.querySelectorAll(".fieldCont input[type='text'], .fieldCont input[type='email'], .fieldCont input[type='password']"),s=[],i=0,l=n.length;i<l;i++)t=n[i],t.value.length>0&&t.classList.add("filled"),s.push(t.addEventListener("keyup",function(e){return this.value.length>0?this.classList.add("filled"):this.classList.remove("filled")}));return s})}).call(this);