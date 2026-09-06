---
title: "Fusor"
published: 2026-09-04
updated: 2026-09-04
draft: false
description: "Fusor静电约束核聚变装置项目"
image: "/Fusor/Fusor.png"
tags: ["技术","科技"]
category: "技术"
---

说明：
===

开学了，所以很久没更新文章了，这次的文章开头比较简短，注重于教程。由于关于这个装置的DIY视频教程网络上特别难找，经过我这几天的理论研究我就通过博客文章分享一下经验。我其实在之前就非常想拥有一个Fusor的实验装置，我最近看《命运石之门》时，看到辉光管就偶然间就想起了这个东西。

专业内容请参考如下链接：

[fusor.net](https://fusor.net/)

[wikipedia](https://en.wikipedia.org/wiki/Fusor)

原理：
===
Fusor是一种利用电场将离子加热到足以发生核聚变的温度的装置。该装置在真空环境中的两个金属笼之间感应出电压。正离子沿着电压降下落，速度逐渐加快。如果它们在中心碰撞，就会发生聚变。整体的几何形状是采用球形对称栅极结构。
在超高真空（< 1e-5 Torr）下，向中心栅极施加负高压直流电（至少-30kV ~ -50kV），电离氘气（D₂）形成等离子体，氘离子在静电场中被加速对撞，产生氘-氘（D-D）聚变反应，释放出2.45 MeV中子。

由于氘这种耗材的特殊性，未经批准很难买到，所以可以先填充氮气作为保护气进行试验，用霓虹灯电源提供的16kV电压交流电即可产生辉光放电，如要达到聚变条件则需要倍压整流电路。**辉光放电实验可以用于学习真空放电和等离子体现象，但它不是Fusor聚变实验的简单低压版。**

![1](/Fusor/3.jpg)

真空系统：
===

**真空球腔**(这部分将在Fusor2文章中改动，接口部分可能需推倒重来)

这一般是不锈钢球状腔室定制，建议采用304/316L不锈钢，用不锈钢定制的腔室极为昂贵，懂点机械加工的朋友都知道，这其中包含图纸费、人工费、机器费、材料费等杂七杂八的费用加起来也的上千元人民币。

这个装置由上下两个不锈钢半球组成，中间靠CF法兰连接，上半球包含三个接口，一个进气（**KF16接口**），一个抽气（**KF25接口**），还有一个观察窗，下半部分主要是电极（**高压真空馈通装置**），装置的外壳接入电路的正极，下面的电极接入负极，下方图片仅供参考。

![2](/Fusor/Image_1788541783030_453..jpg)
![3](/Fusor/Image_1788541781732_224..jpg)

一个6英寸、304不锈钢的球形真空室，使用8英寸CF法兰连接。

>1个 DN40 CF 主观察窗接口。

>1个 DN16 CF 高压电极引入接口。

>1个 KF16 真空计接口。

>1个 KF16 进气针阀接口。

>1个 KF25 主抽气口接口。<br/>

**机械泵**

真空系统采用的是浙江飞越（VALUE）**VRD-4**双级旋片真空泵。接口标准：VRD-4标配KF16（NW16）快卸法兰，定制球室时需预留**KF16/KF25标准接口**（因为分子泵作为主泵，接口定制存在变动），最好使用氩弧焊工艺。

参数：极限分压强5e-2 Pa（约 3.75e-4 Torr），抽速4m³/h

这种机械泵是达不到超真空< 1e-5 Torr标准的，只能作为前泵，得通过主泵，如分子泵，才能达到聚变级。真空系统的选择需要根据实验目标确定。旋片泵可以用于获得较低压力的预抽真空，但如果实验确实要求进入更高真空区域，则通常需要在前级泵基础上采用更适合高真空的泵组。

所以VRD-4是先把系统从大气压抽到较低压力，然后通过涡轮分子泵继续把系统推向高真空。

![4](/Fusor/1.png)

[淘宝链接](https://pcdetail.taobao.com/N3h4cERvNWY0QTRoNjdLMDBFeng4dz09.html?spm=a21u7r.29427388.item.1.6f616562Er5oks)

[真空泵VRD系列 安装操作视频]( https://www.bilibili.com/video/BV1zcgA6vEJN/?share_source=copy_web&vd_source=e73d21201c6540988c7f29e0e5ba87e1)

**分子泵**

我找到一款比较有性价比的分子泵，但是特别小，大概比巴掌大一圈，但他绝对不是玩具。而是真正的桌面级小型涡轮分子泵。叫：Pfeiffer HiPace 80 + TC 110 但值得注意的是，这台泵不一定跟VRD-4配套，但是从这两个泵从前级压力范围来看，很可能是能匹配的。目前这台分子泵的前级接口是DN16 ISO-KF，而VRD-4接口是 KF16。还有需要知道的是VRD-4的前级抽速是否满足这台分子泵要求。

参数：![12](/Fusor/10.png) ![13](/Fusor/11.png)

参考图：![13](/Fusor/12.png)


**节流阀**

它的作用是在超高真空环境下，对氘气的流量进行极其精细的调节,普通的开关阀门无法实现这种级别的控制。

国产高真空微调阀 (GW-J系列等)，推荐使用型号：**GW-J30-T**，接口可选**KF16/KF25 标准真空接口**。

![5](/Fusor/2.png)

[淘宝链接](https://item.taobao.com/item.htm?abbucket=14&id=717154007079&mi_id=0000RJzi3f05W_yPhPzKCuTvL_eXXtqMx9Nzw606eBPMsZQ&ns=1&priceTId=214783e617885429726685325e18b4&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%22680391d566e04824d633a3c8f8cb4886%22%7D&xxc=taobaoSearch)

**电极**

这下面的组件有个专业叫法叫：“高压真空馈通装置”。

这是这个装置的难点之一，另一个难点是重水电解制氘收集。这个东西的成品件也是极为昂贵的，30kV的成品大概需要700多人民币（但价格也不是固定的，过个一段时间也会变动）。

![6](/Fusor/4.png)

电路系统：
===

**霓虹灯变压器**

霓虹灯变压器，又称（NST）是一种具有电流限制特性的高压交流源，可用于低压气体放电等实验研究。其输出参数需要区分额定值、空载值和实际带载状态。

NST是一种升压变压器，能将220V市电升至数千至一万五千伏（15kV）或者16kV的高压。NST是中心抽头接地的。其铭牌上的15kV通常是开路电压（OCV），60mA是短路电流（SCC）。

作为一级电路，需要用到倍压整流电路作为二级从而提高电压以达到聚变点火条件并且转换为直流电，NST输出的是高压交流电（AC），而Fusor需要高压直流电（DC），因此需要通过整流和倍压电路进行转换。不过15kV足够让填充的氮气产生漂亮的等离子体辉光，聚变条件至少得30-50kV左右。

![7](/Fusor/6.png)

[淘宝链接](https://e.tb.cn/h.8LXMGdLa0EBJ4m1?tk=DA24TgNEOFQ)

**倍压整流电路**

这个部分就需要一定的专业电学知识了，简易教程可以参考视频[bilibili](bilibili.com/video/BV15sFszVEHP/?spm_id_from=333.1387.homepage.video_card.click)此视频可以说非常贴合Fusor项目。

愿意折腾的可以参考Github上一个专门为Fusor设计的开源板[GitHub](https://github.com/guberti/FusorCockcroftWaltonMultiplier)其实这个完全可以用万能板（洞洞板）焊接二极管和电容。

原理：在交流电的正半周，电流通过二极管给第一个电容（C1）充电，让它达到输入的峰值电压，如果输入是15kV交流，峰值约为21kV，C1就被充到约21kV。在接下来的负半周，电源电压和C1上已有的电压会串联叠加（变成约42kV）。这个更高的电压通过第二个二极管，给第二个电容（C2）充电。

简单例子就是上下各一个电容和二极管总共是两个电容和两个二极管就是一倍压，如果上下各两个就是二倍压，以此类推。（我的理解可能有误，毕竟我是电学小白）参考图：![8](/Fusor/7.png)
![9](/Fusor/20170614181654412.gif)

我的计划是变压器输出15kV,那么一级倍压大概输出约42kV，二级倍压理论上输出约84kV，但是在工程上实现在带负载后会显著跌落，为了在带载后仍能稳定输出30-50kV，所以直接采用2级倍压整流电路（4个二极管+4个电容）。

电容选用高压陶瓷电容。参数：额定电压：≥ 50kV，电容量：1nF (1000pF) 到 10nF 之间。产品选择是：50kV 1000pF (1nF/102)

[淘宝链接](https://item.taobao.com/item.htm?abbucket=14&id=831862263377&mi_id=0000IaU1nXz8bUCRqoSBuazuA6sAF-N2u_s8cMjcnIDgmnE&ns=1&priceTId=2150433417885902547882111e0f9e&skuId=5574080268522&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%22ef378495102bab815d6870f9f44702a9%22%7D&xxc=taobaoSearch)

参考图![10](/Fusor/8.png)

二极管选用高压硅堆。参数：反向重复峰值电压：≥ 50kV，正向平均电流：≥ 100mA。产品选择是：2CL50kV/100mA

[淘宝链接](https://item.taobao.com/item.htm?abbucket=14&id=1022461902906&mi_id=00004jmQMo-pbGgPipphA3ameGHZEONQWz6BViVMU4o1NtQ&ns=1&skuId=6034439029030&spm=a21n57.1.hoverItem.3&utparam=%7B%22aplus_abtest%22%3A%22dd3769d944aff4dc7f9d4684f200b6ca%22%7D&xxc=taobaoSearch)

参考图![11](/Fusor/9.png)

结尾
===

那么关于Fusor的教程就先到这里，后续有补充的话我专门写一篇Fusor文章2

---



<script src="https://giscus.app/client.js"
        data-repo="RadiumCoffee63/Goombablog-Astro"
        data-repo-id="R_kgDOTGKFGg"
        data-category="General"
        data-category-id="DIC_kwDOTGKFGs4DAd11"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>