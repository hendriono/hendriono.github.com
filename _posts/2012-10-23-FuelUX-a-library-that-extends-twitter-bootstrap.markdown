---
layout: post
title: FuelUX a library that extends Twitter Bootstrap
category: Coding
tags: fuelux jquery bootstrap requirejs grunt amd 
year: 2012
month: 10
day: 23
published: true
comments: true
summary: Fuel UX extends Twitter Bootstrap with additional lightweight JavaScript controls for your web application. 
image: post_four.png
---

<h2>Preface</h2>
<p><a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a> has helped me as a middle tier backend developer to create styled responsive websites and proof of concept apps with super ease.  Recently a team of developers where I work have extended Twitter Bootstrap with more controls, grunt, AMD support, and have open sourced it for others to contribute.  This post will show you how easy it was to switch to FuelUX which gives me all that Twitter Bootstrap has and <a href="http://code.exacttarget.com/devcenter/fuel-ux" target="_blank">some more controls</a>.</p>
<p>
<ul>
<li><a href="http://code.exacttarget.com/devcenter/fuel-ux" target="_blank">FuelUX Getting Started</a></li>
<li><a href="https://github.com/ExactTarget/fuelux" target="_blank">GitHub FuelUX Repo</a></li>
<li><a href="http://exacttarget.github.com/fuelux/" target="_blank">GitHub FuelUX Page</a></li>
</ul>
</p>
<h2>Hooking up FuelUX</h2>
<p>This blog was using Twitter Bootstrap natively and it still is using Bootstrap (because Bootstrap rocks) just in an extended fashion.  </p>
<p><b>First</b> add the <i>class="fuelux"</i> in the HTML root tag.</p>
<p><pre><code>&lt;!DOCTYPE html&gt;<br/>&lt;html <b>class="fuelux"</b> lang="en"&gt;</code></pre></p>   
<p><b>Second</b> change the link and script references from bootstrap to the fuelux.  Since FuelUX extends Bootstrap you shouldn't have any issues and along with it get more controls.  I could have also choosen to use the actual css files by downloading them from the <a href="https://github.com/ExactTarget/fuelux" target="_blank">GitHub Repo</a> <i>dist/css</i> <a href="https://github.com/ExactTarget/fuelux/tree/master/dist/css" target="_blank">folder</a>.</p>
<p><pre><code>&lt;link href="http://fuelux.exacttargetapps.com/fuelux/2.0/css/fuelux.css" rel="stylesheet" /&gt;<br/>
&lt;link href="http://fuelux.exacttargetapps.com/fuelux/2.0/css/fuelux-responsive.css" rel="stylesheet" /&gt;<br/>
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"&gt;&lt;/script&gt;<br/>
&lt;script src="http://fuelux.exacttargetapps.com/fuelux/2.0/loader.min.js" type="text/javascript"&gt;&lt;/script&gt;   
</code></pre></p>
<p>That is it!  Your site still has the Bootstrap markup and <a href="http://code.exacttarget.com/devcenter/fuel-ux" target="_blank">some more controls</a>.</p>
<h2>Additional Themes</h2>
<p>Themes were baked in as well, if you want to see one of the themes .. alter the link and script resource links as follows:</p>
<p><pre><code>&lt;link href="http://fuelux.exacttargetapps.com/<b>fuelux-imh</b>/2.0/css/fuelux.css" rel="stylesheet" /&gt;<br/>
&lt;link href="http://fuelux.exacttargetapps.com/<b>fuelux-imh</b>/2.0/css/fuelux-responsive.css" rel="stylesheet" /&gt;<br/>
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"&gt;&lt;/script&gt;<br/>
&lt;script src="http://fuelux.exacttargetapps.com/<b>fuelux-imh</b>/2.0/loader.min.js" type="text/javascript"&gt;&lt;/script&gt;
</code></pre></p>
<h2>Sample Starter Page</h2>
<p>For those that aren't altering their existing website or application, you can use the sample web page below to get going with FuelUX right away.</p>
<p><script src="https://gist.github.com/3940004.js"> </script></p>

<h2>Conclusion</h2>
<p>It is clear that <a href="http://exacttarget.github.com/fuelux/" target="_blank">FuelUX</a> will grow with Bootstrap and also with support of new controls along the way. It looks super polished, nicely done!  I can't wait to watch this grow and see what others contribute!</p>
<p><a href="http://news.ycombinator.com/item?id=4688066" target="_blank" title="See what others are saying on Hacker News"><img src="/img/yc500.gif" title="See {{ page.title }} on Hacker News" /> Hacker News link</a></p>