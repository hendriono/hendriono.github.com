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
        <h4 class="media-heading"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong></h4>
        <p>{{ post.summary }}</p>
        <p>
        <i class="icon-calendar"></i> {{ post.date | date: "%B %e, %Y" }}  
        | <i class="icon-tags"></i> {% assign tags_list = post.tags %} {% include helpers/tags_list.html %}
        </p>
        <div class="row"><div class="span6 column"><span class="pull-right"><a href="{{ post.url }}" class="btn btn-small">Selengkapnya <i class="icon-chevron-right"></i></a></span></div></div>
      </div>
    </div> 
    <hr>
  </div>
</div>
{% endfor %}	