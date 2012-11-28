---
layout: layout
title: "Beranda"
---

{% for post in site.posts offset: 0 limit: 50 %}
<div class="row">
  <div class="span8">
    <div class="row media">
      <div class="span2">
        <a href="{{ post.url }}" >
          <img src="/img/posts/{{ post.image }}" alt="{{ post.title }}" class="img-polaroid media-object">
        </a>
      </div>
      <div class="span6 media-body">
        <h4 class="media-heading entry-title"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong></h4>
        <p class="entry-summary">{{ post.summary }}</p>
        <p><i class="icon-user"></i> <span class="vcard"><a class="url fn" href="https://plus.google.com/114478773453104104429/posts" rel="author" title="author profile">{{ site.author.name }}</a></span> | <i class="icon-calendar"></i> <abbr class="updated published" title="">{{ post.date | date: "%B %e, %Y" }}</abbr> | <i class="icon-tags"></i> {% assign tags_list = post.tags %} {% include helpers/tags_list.html %}
        </p>
        <div class="row"><div class="span6 column"><span class="pull-right"><a href="{{ post.url }}" class="btn btn-small">Selengkapnya <i class="icon-chevron-right"></i></a></span></div></div>
      </div>
    </div> 
    <hr class="soften">
  </div>
</div>
{% endfor %}	