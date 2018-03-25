



/* ControlTag Loader for Vox Media 36b99e73-5c79-40db-9954-69f256f24981 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"JImc5u4N","context_terms":[],"publisher":{"name":"Vox Media","active":true,"uuid":"36b99e73-5c79-40db-9954-69f256f24981","version_bucket":"stable","id":1480},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"global_user_match":"site","link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"voxmedia"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/36b99e73-5c79-40db-9954-69f256f24981","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/36b99e73-5c79-40db-9954-69f256f24981","consent_set":"https://consumer.krxd.net/consent/set/36b99e73-5c79-40db-9954-69f256f24981","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/36b99e73-5c79-40db-9954-69f256f24981","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"eater","cap":255,"id":17631,"organization_id":1480,"uid":"JImc5u4N"},"tags":[{"id":31775,"name":"Facebook Custom Audience Tag","content":"<script type=\"text/javascript\" id=\"\">(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"https://connect.facebook.net/en_US/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"594981607301768\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);window._fbq.push([\"track\",\"594981607301768\",{value:\"1.00\",currency:\"USD\"}]);</script>","target":null,"target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":[]},{"id":8057,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":8058,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":8063,"name":"Krux Data Transfer Code","content":"<script>\n    // Using Meta keywords to produce page attribute keywords\n    Krux('scrape', {\n        \"page_attr_keywords\": {\n            meta_name: \"keywords\"\n        }\n    });\n\n    // Using UrlPath attributes\n    Krux('scrape', {\n        \"page_attr_url_path_1\": {\n            url_path: \"1\"\n        }\n    });\n    Krux('scrape', {\n        \"page_attr_url_path_2\": {\n            url_path: \"2\"\n        }\n    });\n    Krux('scrape', {\n        \"page_attr_url_path_3\": {\n            url_path: \"3\"\n        }\n    });\n  \n    var domain = Krux('scrape',{'page_attr_domain':{url_domain: '2'}}).page_attr_domain;\n    if(domain.match(/^com?\\./)){\n         Krux('scrape',{'page_attr_domain':{url_domain: '3'}});\n    }\n\n\n    (function() {\n        if (window.KxVox) {\n            var x = KxVox;\n            var s = Krux('get', 'site');\n\n            Krux('set', 'page_attr_' + s + '_site', s);\n            Krux('set', 'page_attr_' + s + '_domain', domain);\n          \tKrux('set', 'page_attr_' + s + '_entry_id', x.entry_id);\n            Krux('set', 'page_attr_' + s + '_affiliation', x.affiliation);\n            Krux('set', 'page_attr_' + s + '_page_type', x.page_type);\n            Krux('set', 'page_attr_' + s + '_entry_group', x.entry_group);\n            Krux('set', 'page_attr_' + s + '_keywords', x.keywords);\n\n\n            // Umbel Scraper\n            if (document.cookie.match('umbel_segment_ids')) {\n\n                Krux('scrape', {\n                    'user_attr_umbel_ids': {\n                        cookie: 'umbel_segment_ids'\n                    }\n                });\n            }\n        }\n    })();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":8064,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":8066,"name":"AdAdvisor S2S provider tag","content":"<script>\r\n(function() {\r\n  // adadvisor redirects to http://logger... so it's not https safe\r\n  if (location.protocol == \"http:\") {\r\n     var u = \"https://aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e\";\r\n     (new Image()).src = u;\r\n   }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":8074,"name":"Nielsen - Precision Marketing (via Exelate) provid","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":8075,"name":"Nielsen Consumer Activation (via Exelate) provider","content":"<script>\r\n// Blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":8076,"name":"DataLogix - (Kelloggs)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":8078,"name":"TubeMogul Custom Connect","content":"","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":8081,"name":"Neustar Custom Connect","content":"<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":8084,"name":"Quantcast (Vox) provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]}],"usermatch_tags":[{"id":5,"name":"DataXu User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = location.protocol;\n        if (kuid) {\n           var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\n           var i = new Image();\n           i.src = dxu_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":10,"name":"Rubicon User Match","content":"<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n       var rubicon_url = '//token.rubiconproject.com/token?pid=27384&puid=' + kuid;\r\n       var i = new Image();\r\n       i.src = rubicon_url;\r\n    }\r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\n(function()\n{ var i = new Image(); i.src = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1'; }\n)();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":55,"name":"Acxiom APAC Usermatch","content":"<script>\n(function(){\n\tvar liveramp_url = '//s.acxiomapac.com/sci',\n\tdata = {\n\t\tpid: 90010,\n\t\tuid: Krux('get','user')\n\t};\n\tif(data.uid){\n\t\tKrux('require:http').pixel({\n\t\t\turl: liveramp_url,\n\t\t\tdata: data\n\t\t});\n\t}\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":67,"name":"Nielsen Usermatch","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//secure-us.imrworldwide.com/cgi-bin/m?ci=ent599834&c1=kxkuid,' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":13,"name":"Sonobi User Match","content":"<script>\n!function() {\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    (new Image()).src = prefix\n                        + '//sync.go.sonobi.com/usc.gif?'\n                        + prefix\n                        + '//beacon.krxd.net/usermatch.gif?partner=sonobi&partner_uid=[UID]';\n}();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":23,"name":"BlueKai S2S","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":32,"name":"Casale (Index Exchange) user match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = window.location.protocol;\n      var casale_url = '';\n      var kurl = '//beacon.krxd.net/usermatch.gif?partner=casale&partner_uid=__UID__';\n      var encode_krux_url = encodeURIComponent(prefix + kurl);\n      \n      if (prefix == \"http:\") {\n         casale_url = prefix + '//ssum.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url;\n      }\n      else if (prefix == \"https:\") { \n         casale_url = prefix + '//ssum-sec.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url; \n      }\n\n      new Image().src = casale_url;\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":54,"name":"Survata User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//px.surveywall-api.survata.com/k';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":25,"name":"eXelate Media","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//loadm.exelator.com/load\",\n      data: {\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\n          buid: kuid,\n          p: '204',\n          g: '270',\n          j: '0'\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":27,"name":"Visual DNA","content":"<script>\nnew Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":41,"name":"Adobe user match","content":"<script>\n(function(){\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar url = prefix + '//dpm.demdex.net/ibs:dpid=66757&&dpuuid=' + kuid + '&redir=' + encodeURIComponent(prefix)+'%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dadobe%26partner_uid%3D${DD_UUID}';\n\tnew Image().src = url;\n  }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":65,"name":"Weborama User Match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   var krux_url = encodeURIComponent('://beacon.krxd.net/usermatch.gif?partner=weborama&partner_uid=');\n   if (kuid) {\n      new Image().src = 'https://dx.bigsea.weborama.com/collect?r=https' + krux_url + '{UUID}';\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":73,"name":"DataLogix - (Kelloggs)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":79,"name":"Quantcast S2S User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n           var qcast_url = '//pixel.quantserve.com/pixel/p-j_f_9hh7_PWUw.gif?idmatch=0';\n           var i = new Image();\n           i.src = qcast_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":81,"name":"Bombora","content":"<script>\n\n(function () {\n_ml = window._ml || {};\n_ml.pub = '748';\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\nmltag.type = 'text/javascript'; mltag.async = true;\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\ns.parentNode.insertBefore(mltag, s);\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix - Legacy","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.e10e6504b45d287709c1597d6e20c8ae', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());