import{_ as t,r as p,o as c,c as i,a as n,d as e,e as a,b as s}from"./app.a5758758.js";const l={},u=a('<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1><h2 id="mongodb\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#mongodb\u7B80\u4ECB" aria-hidden="true">#</a> MongoDB\u7B80\u4ECB</h2><p>\u5FEB\u901F\u5F00\u53D1web\u5E94\u7528\u7684\u6587\u6863\u578B\u6570\u636E\u5E93,\u6BD4\u8F83\u81EA\u7531\u7684\u6570\u636E\u5E93,json\u548Cbson</p><p>.....</p><h2 id="mongodb\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#mongodb\u542F\u52A8" aria-hidden="true">#</a> MongoDB\u542F\u52A8</h2>',5),r=s("\u5B89\u88C5\u6700\u65B0\u7684,\u4E0B\u8F7D\u5730\u5740:"),d={href:"http://dl.mongodb.org/dl/win32/x86_64",target:"_blank",rel:"noopener noreferrer"},k=s("\u9002\u7528 win32 \u7684\u4E0B\u8F7D\u5305 (mongodb.org)"),m=a('<p>\u8FDB\u5165mongo\u5B89\u88C5\u76EE\u5F55\u4E2D\u7684bin\u6587\u4EF6\u5939,\u5728\u5730\u5740\u7A97\u4E2D\u8F93\u5165cmd(\u628A\u4E4B\u524D\u7684\u8DEF\u5F84\u5220\u9664\u5728\u8F93\u5165cmd\u56DE\u8F66),\u8FDB\u5165\u5F53\u524D\u76EE\u5F55\u7684cmd\u7A97\u53E3\u8F93\u5165mogod,\u542F\u52A8MongoDB\u670D\u52A1,\u670D\u52A1\u5E38\u9A7B\u540E\u53F0\u540E,\u8F93\u5165mongo\u53EF\u4EE5\u8F93\u5165js\u8BED\u6CD5\u9A8C\u8BC1.</p><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>database=&gt;collection=&gt;document</p><p>\u4E00\u4E2A\u6570\u636E\u5E93\u53EF\u6709\u591A\u4E2A\u96C6\u5408,\u4E00\u4E2A\u96C6\u5408\u53EF\u6709\u591A\u4E2A\u6587\u6863,\u4E00\u822C\u64CD\u4F5C\u7684\u5C31\u662F\u6587\u6863</p><p><img src="http://img.ahait.cn/img/202206191615168.png" alt="image-20220619161528049"></p><p>\u67E5\u770B\u6570\u636E\u5E93<code>show dbs</code>,\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93<code>db</code>,\u4F7F\u7528\u67D0\u4E2A\u6570\u636E\u5E93 <code>use \u5E93\u540D</code> ,\u67E5\u770B\u6570\u636E\u5E93\u6709\u591A\u5C11\u96C6\u5408 <code>show collections</code>,\u67E5\u770B\u5F53\u524D\u96C6\u5408\u6240\u6709\u6587\u6863 <code>db.\u96C6\u5408\u540D.find()</code></p><p>\u6570\u636E\u5E93\u548C\u6587\u6863\u4E0D\u7528\u6211\u4EEC\u521B\u5EFA,\u5F53\u76EE\u6807\u7684\u96C6\u5408\u548C\u6570\u636E\u5E93\u6CA1\u6709\u65F6\u5019,\u4ED6\u4F1A\u81EA\u52A8\u521B\u5EFA</p><h2 id="\u6570\u636E\u7684crud-\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7684crud-\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> \u6570\u636E\u7684CRUD(\u589E\u5220\u6539\u67E5)</h2><blockquote><p>\u5176\u5B9E\u53EF\u4EE5\u7406\u89E3\u4E3Ajs\u8BED\u53E5,\u5BF9\u8C61\u64CD\u4F5C\u5176\u5185\u90E8\u65B9\u6CD5,\u518D\u6DFB\u52A0\u4E00\u4E9B\u9700\u8981\u7684\u53C2\u6570.</p></blockquote><p>\u63D2\u5165:insert\u4E0D\u58F0\u660E\u63D2\u5165\u51E0\u4E2A,insertone\u76F4\u63D2\u5165\u4E00\u4E2A,insertmany\u53EA\u63D2\u5165\u591A\u4E2A;\u8BED\u4E49\u5316</p><p>\u63D2\u5165\u6587\u6863 db.\u96C6\u5408\u540D.insert(\u6587\u6863\u5185\u5BB9),\u4F8B\u5982db.c001.insert({name:&quot;Tom&quot;,age:18})</p><p>\u81EA\u52A8\u6DFB\u52A0**_id**\u5C5E\u6027,\u786E\u4FDD\u6587\u6863\u6570\u636E\u552F\u4E00;\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6307\u5B9A\u751F\u6210<code>db.c001.insert({_id:&quot;001&quot;,name:&quot;Tom&quot;,age:18})</code>,\u8FD9\u4E5F\u8981\u786E\u5B9A\u552F\u4E00\u6027.</p><hr><p><strong>\u67E5\u8BE2</strong></p><p>db.\u96C6\u5408\u540D,find(\u67E5\u8BE2\u6761\u4EF6),\u4E3A\u7A7A{}\u662F\u67E5\u627E\u5168\u90E8:db.\u96C6\u5408\u540D,find({})</p><p>\u67E5\u8BE2\u6307\u5B9A\u5C5E\u6027(\u5B57\u6BB5)\u7684\u6587\u6863:db.\u96C6\u5408\u540D.find({_id:&quot;????&quot;})</p><p>\u67E5\u8BE2\u6709\u591A\u5C11\u4E2A:db.\u96C6\u5408\u540D,find(\u67E5\u8BE2\u6761\u4EF6).count()</p><p>$it\u5C0F\u4E8E, $gt \u5927\u4E8E ,$or[]\u6216,$ite\u5C0F\u4E8E\u7B49\u4E8E,$gte\u5927\u4E8E\u7B49\u4E8E</p><p>\u4F8B\u5B50\u67E5\u8BE2\u51FAage\u5927\u4E8E20\u548C\u5C0F\u4E8E10\u7684\u4EBA</p><p>db.num.find($or[{age:{$it:10}},{age:{$gt:20}}])</p><hr><p><strong>\u4FEE\u6539</strong></p><p>set ,unset</p><p>db.c1.update($unset{name:&quot;tom&quot;})</p><p>\u540C\u65F6\u4FEE\u6539\u591A\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6587\u6863</p><hr><p><strong>\u5220\u9664</strong></p><p>db.</p><h2 id="\u6587\u6863\u95F4\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u95F4\u5173\u7CFB" aria-hidden="true">#</a> \u6587\u6863\u95F4\u5173\u7CFB</h2><p>\u540C\u6570\u636E\u5173\u7CFB:\u4E00\u5BF9\u4E00,\u4E00\u5BF9\u591A,\u591A\u5BF9\u591A</p><h2 id="\u5BFC\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u6570\u636E" aria-hidden="true">#</a> \u5BFC\u5165\u6570\u636E</h2><p>\u5DF2\u6709\u7684json\u6587\u4EF6\u5BFC\u5165\u5230\u6570\u636E\u5E93,</p><h2 id="p14\u6392\u5E8F\u548C\u6295\u5F71" tabindex="-1"><a class="header-anchor" href="#p14\u6392\u5E8F\u548C\u6295\u5F71" aria-hidden="true">#</a> P14\u6392\u5E8F\u548C\u6295\u5F71</h2><p><strong>sort()</strong></p><p>\u9ED8\u8BA4\u662F\u6309\u7167_id\u7684\u503C\u6392\u5E8F\u7684(\u5347\u5E8F:\u4ECE\u5C0F\u5230\u5927),sort()\u6307\u5B9A\u6587\u6863\u6392\u5E8F\u7684\u89C4\u5219</p><p><code>db.collection.find().sort(\u5C5E\u6027:1)</code>\u6309\u7167\u5C5E\u6027\u6392\u5E8F,1\u4EE3\u8868\u5347\u5E8F,-1\u4EE3\u8868\u964D\u5E8F</p><p>\u591A\u89C4\u5219\u6392\u5E8F(\u5F53\u6709\u5C5E\u6027\u503C\u76F8\u7B49\u65F6,\u6309\u7167\u4EC0\u4E48\u89C4\u5219)</p><p><code>db.collection.find().sort(\u5C5E\u6027:1,\u5C5E\u60272:-1)</code></p><p><strong>\u6295\u5F71</strong></p><p>\u4EC5\u4EC5\u663E\u793A\u60F3\u8981\u770B\u7684\u4E00\u5217(\u67D0\u4E00\u5C5E\u6027),\u6BD4\u5982\u4EC5\u4EC5\u60F3\u770Bname,_id\u662F\u9ED8\u8BA4\u663E\u793A\u7684,\u5982\u679C\u4E0D\u663E\u793A\u8BBE\u7F6E\u4E3A0</p><p><code>db.collection.find({},{name:1,_id:0})</code></p><h2 id="p15\u4E86\u89E3mongoose" tabindex="-1"><a class="header-anchor" href="#p15\u4E86\u89E3mongoose" aria-hidden="true">#</a> P15\u4E86\u89E3mongoose</h2><p>mongoose\u662F\u901A\u8FC7nodejs\u91CC\u64CD\u4F5CMongoDB\u7684\u6A21\u5757,\u7BA1\u7406\u6570\u636E\u5E93\u7684\u5BF9\u8C61\u6587\u6863\u6A21\u578B(ODM)\u5E93,\u4E0D\u7528\u4EBA\u5DE5\u4E00\u4E2A\u4E2A\u63D2\u5165\u5220\u9664.....\u6570\u636E\u5E93\u5230node\u4E2D\u5168\u90E8\u53D8\u6210\u5BF9\u8C61,\u4ECE\u800C\u7528\u5BF9\u8C61\u7684\u65B9\u5F0F\u64CD\u4F5C\u548C\u7BA1\u7406mongodb</p><p><strong>\u65B0\u7684\u5BF9\u8C61</strong></p><ul><li>Schema(\u6A21\u5F0F\u5BF9\u8C61),\u4E00\u79CD\u7EA6\u675F,\u4E00\u79CD\u68C0\u9A8C,\u9A8C\u8BC1.\u901A\u8FC7\u4ED6\u5BF9\u6587\u6863\u7684\u64CD\u4F5C\u8FDB\u884C\u7EA6\u675F,\u6BD4\u5982\u5C5E\u6027\u4E0D\u80FD\u4E3A\u7A7A\u7684\u9650\u5236....</li><li>Model,\u4E00\u4E2Amodel\u76F8\u5F53\u4E8E\u5BF9\u5E94\u4E00\u4E2Acollection\u96C6\u5408</li><li>Document,\u76F8\u5BF9\u4E8Ecollection\u4E2D\u7684\u6570\u636E\u6587\u6863</li></ul><p><strong>\u5982\u4F55\u4F7F\u7528</strong></p>',46),v={href:"https://mongoosejs.com/docs/index.html",target:"_blank",rel:"noopener noreferrer"},g=s("Mongoose v6.4.0: Getting Started (mongoosejs.com)"),h=s("\u6587\u6863"),b=a(`<p>\u65B0\u5EFA\u8FD0\u884C\u4EE3\u7801\u7684\u6587\u4EF6\u5939,vscode\u63A7\u5236\u53F0\u7528npm\u5B89\u88C5mongoose,\u65B0\u5EFAjs\u6587\u4EF6,\u7F16\u5199\u4EE3\u7801,\u7528<strong>Code Runer</strong>\u63D2\u4EF6\u8FD0\u884Cjs\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165mongoose</span>
<span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FDE\u63A5MongoDB</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://localhost:27017/test&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u76D1\u542CMongoDB\u8FDE\u63A5\u72B6\u6001</span>
<span class="token comment">// \u4E00\u6B21\u6027\u4E8B\u4EF6\uFF1A\u8FDE\u63A5\u6210\u529F,\u8FDE\u63A5\u65AD\u5F00</span>
mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u65AD\u5F00&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u65AD\u5F00\u6570\u636E\u5E93\u8FDE\u63A5</span>
mongoose<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u4E00\u822C\u4E0D\u9700\u8981</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="p16\u4E86\u89E3schema\u548Cmodel" tabindex="-1"><a class="header-anchor" href="#p16\u4E86\u89E3schema\u548Cmodel" aria-hidden="true">#</a> P16\u4E86\u89E3schema\u548Cmodel</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/test&quot;</span><span class="token punctuation">)</span>
mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FDE\u63A5\u6210\u529F&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFAschema\u6A21\u5F0F\u5BF9\u8C61</span>
<span class="token keyword">var</span> Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>
<span class="token keyword">var</span> stuSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&quot;female&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// gender \u9ED8\u8BA4\u662F\u5973\u751F</span>
    <span class="token literal-property property">adderss</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u901A\u8FC7schema\u6765\u521B\u5EFAmodel,Model\u4EE3\u8868\u7684\u662F\u6570\u636E\u5E93\u7684\u96C6\u5408</span>
<span class="token comment">// \u521B\u5EFAmodel,  mongoose.model(modelName, schema),\u901A\u8FC7\u6A21\u578B\u64CD\u4F5C\u6570\u636E\u5E93</span>
<span class="token comment">// modelName\u4EE3\u8868\u8981\u5E94\u7528\u7684\u96C6\u5408\u540D\u5B57</span>
<span class="token keyword">const</span> stuModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">,</span> stuSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5411\u6570\u636E\u5E93\u63D2\u5165\u6587\u6863</span>
stuModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;\u5B59\u609F\u7A7A&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">8888</span><span class="token punctuation">,</span>
    <span class="token literal-property property">adderss</span><span class="token operator">:</span><span class="token string">&quot;\u82B1\u679C\u6D1E&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6210\u529F!!&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
stuModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;\u767D\u9AA8\u7CBE&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">7777</span><span class="token punctuation">,</span>
    <span class="token literal-property property">adderss</span><span class="token operator">:</span><span class="token string">&quot;\u767D\u9AA8\u6D1E&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6210\u529F!!&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u81EA\u52A8\u5427\u96C6\u5408\u540D\u53D8\u6210\u590D\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="p17model\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#p17model\u7684\u64CD\u4F5C" aria-hidden="true">#</a> P17Model\u7684\u64CD\u4F5C</h2><p><strong>API</strong> model.js\u4E2D\u5F88\u591A\u65B9\u6CD5\u7684\u64CD\u4F5C\u6587\u6863</p><p>find\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2Adoc,\u4E5F\u5C31\u662F\u67E5\u8BE2\u7684\u7ED3\u679C,\u8FD4\u56DE\u7684\u5BF9\u8C61,\u5C31\u662Fdocument\u5BF9\u8C61</p><p>model.find(condition,[projection],callbackfunction(err,doc))</p><p>findone,findbyid</p><p>update,updateone,updatemany</p><h2 id="p18\u5B9E\u4F8Bdocument\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#p18\u5B9E\u4F8Bdocument\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a> P18\u5B9E\u4F8Bdocument\u5BF9\u8C61\u65B9\u6CD5</h2><p>\u7528doc\u64CD\u4F5C\u6570\u636E\u5E93,doc.save(),doc.remove(),doc.set(&quot;\u5C5E\u6027&quot;,&quot;\u4FEE\u6539\u7684\u65B0\u503C&quot;)</p><p>\u6BCF\u6B21doc\u64CD\u4F5C\u540E\u4E00\u5B9A\u8981doc.save()</p><p>tojson\u5B57\u7B26\u4E32\u5BF9\u8C61,toObject\u8F6C\u6362\u4E3A\u666E\u901A\u5BF9\u8C61</p><p>\u5220\u9664\u5BF9\u8C61\u5C5E\u6027 delete doc.address\u4E0D\u53EF\u4EE5,\u9700\u8981\u5148toObject\u7136\u540E\u518D\u5220\u9664</p><h2 id="p19\u6A21\u5757\u5316\u7684mongoose" tabindex="-1"><a class="header-anchor" href="#p19\u6A21\u5757\u5316\u7684mongoose" aria-hidden="true">#</a> P19\u6A21\u5757\u5316\u7684mongoose</h2><p>\u8BA9\u8FDE\u63A5\u6570\u636E\u5E93,\u65B0\u5EFAschema\u53D8\u5F97\u66F4\u52A0\u65B9\u4FBF</p>`,17);function f(q,_){const o=p("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[r,n("a",d,[k,e(o)])]),m,n("blockquote",null,[n("p",null,[n("a",v,[g,e(o)]),h])]),b])}var x=t(l,[["render",f],["__file","MongoDB.html.vue"]]);export{x as default};
