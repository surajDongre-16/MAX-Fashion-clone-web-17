var footer=document.querySelector("#Footer");

footer.innerHTML=`<hr style="opacity:0.2">
<div id="high">
    <div class="upper lame">
        <P style="font-size: 22px;font-weight: bolder;color:black" class="innerPara">Subscribe to our awesome emails.</P>
        <p style="font-size:16px;color:#929391" class="innerPara">Get our latest offers and news straight in your inbox</p>
        <div id="sub">
            <input placeholder="Please enter an email adress" />
            <button id="subscribe">subscribe</button>
        </div>

    </div>
    <div class="upper ">
        <P style="font-size: 22px;font-weight: bolder;color:black" class="innerPara">Download our apps</P>
        <p style="font-size:16px;color:#929391" class="innerPara">Shop our products and offers -on-the-go</p>
        <div id="iimg">
            <img id="upperimg"
                src="data:image/png;base64,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" />
            <img id="lowerimg"
                src="data:image/png;base64,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" />
        </div>

    </div>
</div>

<hr id="name">

<div class="parent">
    <div>
        <P class="para innerPara"><b>Women</b></P>
        <p class="innerPara">Tops</p>
        <p class="innerPara">Dreeses & Jumpsuits</p>
        <p class="innerPara">Sportwear</p>
        <p class="innerPara">Bottoms</p>
        <p class="innerPara">Winterwear</p>
        <p class="innerPara">Ethinicwear</p>
        <p class="innerPara">Lingrei</p>
        <p class="innerPara">Sleepwear</p>
        <p class="innerPara">Accessories</p>
        <p class="innerPara">Shoes</p>
    </div>
    <div>
        <p class="para innerPara"><b>Men</b></p>
        <p class="innerPara">Tops</p>
        <p class="innerPara">Bottoms</p>
        <p class="innerPara">Winterwear</p>
        <p class="innerPara">Accessories</p>
        <p class="innerPara">Shoes</p>

    </div>
    <div>
        <p class="para innerPara"><b>Boys</b></p>

        <p class="innerPara">Tops</p>
        <p class="innerPara">Bottoms</p>
        <p class="innerPara">Indian Wear</p>
        <p class="innerPara">Winterwear</p>
        <P class="innerPara">Essentials</P>
        <p class="innerPara">Accessories</p>
        <p class="innerPara">Shoes</p>
    </div>
    <div>
        <p class="para innerPara"><b>Girls</b></p>
        <p class="innerPara">Tops</p>
        <p class="innerPara">Bottoms</p>
        <p class="innerPara">Indian Wear</p>
        <p class="innerPara">Winterwear</p>
        <P class="innerPara">Essentials</P>
        <p class="innerPara">Accessories</p>
        <p class="innerPara">Shoes</p>
    </div>
    <div>
        <p class="para innerPara"><b>Explore</b></p>
        <p class="innerPara">Offers</p>
        <p class="innerPara">Magazine</p>
    </div>
</div>
<div class="box">
    <div>
        <p class="para innerPara"><b>About</b></p>
        <p class="innerPara">About us</p>
        <p class="innerPara">Write to us </p>
        <p class="innerPara">Careers</p>
        <p class="innerPara">Take a Tour</p>
        <p class="innerPara">Blog</p>
        <p class="innerPara">Store Locator</p>
        <p class="innerPara">Landmark Cares</p>
    </div>
    <div id="spc">
        <p class="para innerPara"><b>Help</b></p>
        <p class="innerPara">Contact us</p>
        <p class="innerPara">Shipping</p>
        <p class="innerPara">Returns Process</p>
        <p class="innerPara">Returns Policy</p>
        <p class="innerPara">Help Center</p>
    </div>

</div>

<hr id="name">

<div id="contact">
    <div class="two">
        <div class="dan"><i class="fa-solid fa-phone" id="size"></i>

        </div>
        <div class="inner">
            <P class="innerPara">Talk to us</P>
            <p style="color:black; font-family: sans-serif;">1800-123-1444</p>
        </div>
    </div>
    <div class="two">
        <div class="dan"><i class="fa-solid fa-messages-question"></i>

        </div>
        <div class="inner">
            <P class="innerPara">Helpcentre</P>
            <p style="color:black; font-family: sans-serif;">help.maxfashion.com</p>
        </div>
    </div>
    <div class="two">
        <div class="dan"><i class="fa-regular fa-envelope" id="size"></i>

        </div>
        <div class="inner">
            <P class="innerPara">Write to us</P>
            <p style="color:black; font-family: sans-serif;">help.in@maxfashion.com</p>
        </div>
    </div>

</div>

<div id="contact1">
    <div><i class="fa-brands fa-facebook-f" id="size"></i></div>
    <div><i class="fa-brands fa-twitter" id="size"></i></div>
    <div><i class="fa-brands fa-instagram" id="size"></i></div>
</div>
<br>
<hr id="name">
<div id="bottom">
    <div id="mar">
        <img style="height:60px;"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAyVBMVEX///8wOrLkACviAAAYJq4eK68oM7DY2e4uOLIOIKwlMLDOz+m3ueDv8PmvsdyIjM7jABjjABJzeMXg4fHxo6nwl5/2wcW9v+LKzOgLHqzkACUmMbBmbMKgpNbjACAaKK739/wAGKvm5/SOks9fZb9JUbn86Orte4Z7f8j4y8/w8flsccNSWbvvipQAA6n98PLmLkU3QbT63+LnPlE+R7b0sLf1ub/pUGBZYL0AEKruhY/xnqbscX3rZnSgo9flDjHpTF7lHTnmMUdWOoqaAAAHp0lEQVR4nO2ca3eaShSGhyMgaGKiNBXEC2pMjaZJbdP2tKe1Tf//jzpeojJ79oAkg6sf3md19YMODPM41z1DhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCGZBQEwSwzQbUajJLCN54F9bBeHb34wf4yRr15HPkrIvu6x5Vq1mh5kW/bth/F815w9I3D8d3qrvbmwsW0nRh74vKZhTLbT9uTyHE9a4PnOsN/6+Syene4T7BOEU3OjsktnEd2zdtdZ3nxIJo+a24QDr/Px6s3HGwGt1cM798X1sJSvbfT3K8/Cyb2vjhb3GiepC4aXUeunMDyBm47L6+GZdPLLCseTte3Tu4diW+pX+dr5VKl8p3J4aHJpLysfHyVoj1VW3ry4eqj3tBTSmTFTvVQZsXUxpbfzcwpXAyY+66oDda12Zc/tNM1+UPnH5XKWzWPoxO+CNXVBXnqnYrhc/sUU58vs1VbZAwErUhz1frWvWxXD33WwQ3N48cll+w/Q6qoq0iM5Q/SJdo+ftfRldlyvUSTTeDVtFetGDYyXYmPFUZC54lk8plLdfnDlCrqymlH2gJ5/vnqgpZe1UrWI59LyDVrSVZIbiu7Em9ZDT+lNKzQ/idjqqgrz8oolDsRYqmrdltqbJ/VzlNleTQBcSWuOBEVaTD8xTTUzi9zqqirLFWrAjSCYU6h/YaaR5h3EZMvdaXpi1Ij3Nc+k6Cp9GkGXeUUaJJbQfyEZhHk1ioGxZX4xLjodPZfXzU5l7cGVRVzpTYVldoFzeKIi45xxbax/u/nL2/z2+iJXR1DRHJoZY6ABVzdcDWnuZ2TP3AttPnOqKoSXA3k1U5dP7BmwbjS1J3NTJNroPs69/e6cltSBouXtEDelXjDyWo+CPGdqXLK9KskV17N9n3b4ZYyzwliR5fCi9P3bwxYn5urV/9qOpOsK/GOd8LOvtYOy3fl+ZNlGIyq7Ra78FsR+9N2MBpVz+bMyiU6T92fm4TEUbcRJKsvR+HYosv0TFfsxKD/k10BGR0Cda5cd7fyE6NJzBaklexSBI+KTvuwyhahensvmqZlho/sQkDjSjxxE05O1WfTpjhX3iJJfX/H1KzBOH0HpUMapIIzXeVyN64KmTHX++tcsQMe0wC5iM1rUVx5vhQFnalBBfdavgMtqnOYuieKBs9SYxHt4fGu+FUf5fLr682oKK5qSznBWJkeRSSkfO1q73BG25fncGGbhhoG0roSX/JldT68RokWxdUwkROMaDlItVpVCzLU1Q5NdEq7u4hXMFV+EL0r8Z6bk0qqLo0PgRuoK8WEskRxaGSdNrT4Qntt3BI8Tu7aOcXPnD7LVMyYQl05PZqiRZqYr+zZECPxdPfFjHZXtPnu6dHGatMRIM0fLqRwUPWluIajoK7skKagHRZd7ykd1sFVnVbaufY56BCSVa/EQ4ebJjzTNLRro0JdqbWG/OSeo9yD9EqHRQ7t2gf6rR7as2W6yhoMSbDUJIqrc5qiQVxZyj20rpa0Siba52hnx5Ap7KpmTf9PkdIXw4SrC50r8oW30D9HkLk3ofKG79/NL5hTGHElV5+DK1rh9N2VSAq6+vJXujp7uau5rtNnoGNMtitth2U8aJWiVFetAq6K1Sv9QFjeMFiuK22nrzIr5Op3xgTL2Ja8QqmuyBeeZqeVe45MV9mrHHXv3hCluqJzhmGifY5GgTkDG3c/Qf9eqqsCc1EarMhw9ZC3di5rOlqqq/yF+Q5l5Zjhij04JLdCs/uCuuIYdaWE+iLdWUklSqZ3xW7WU1mlRBqCMl0p8WVdxVKjr1pX7MEhpcvqlxHBomsLs66UWJ/P91i0t9K7OiqEbPYo0Z5yXdGQKY3mP8McVNK5yorGpDG9P7+mXFfM3oSjymowGzkaV9wktPPEHjcyH/Er1xVdEW5qFm2G7AFV3hU7Ca088B8bn5KW7IrbS/W76dGwvTh+L5WNWq0rEFvdTB7p21CyK3aP3o3uetXZ+hWVcOwV2KNnJ6GXm46J68b6pjcJy3bFn/3w1mc/VgwKnf3gJqGd7YDHDo/NK2OaNpTtiq1YR8C4Yre6dluB7HEjw+c/ynAlhT/b/KsFxV3l2GBNmj1XVIYr+dx2lz1qU9hVbitjT9AY3ako31WieQ2noKvc3vum5LcmTuFK1IcGXLGzgo6UhD0UYvIc1glcsfNySs7amZ9tkmjCu7zXBV7JKVyJZW7/7i0yXfGTUCVK9Yc99PdKQweKu6op98h1JZZ5r05EIQlgye/EsZNQNfrJpjM3JT2Nq7y3l/xl5p4XO8RxUXU2Em9sF+xErsToUT8cetE4c3+QnTrxS+NS38o5lSsher5mQeNG69Nvelf8JFQTcuHf9jIzJQ2+kXeyVVdDOYV6/urClxLYmkBxMvaV43uWF0fdTZb3A4nDu+G3laZKRRvK63CpzfTv58uexDKhKYKe/McAlIN/ok7+XIB+Z6txN3Tig6/16xm7vzlw1pY42/9mb1m0WdzQlLdrytpeLZXzs4vJ9m9ZrP6fXCinCAFhFlTr1UBp7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDG/zjNq/09O1V7AAAAAElFTkSuQmCC" />
    </div>
    <div id="font">
        <p class="innerPara">2022 Retail World Limited</p>
        <p class="innerPara">Terms and Condition-Privacy and Policy</p>
    </div>
</div>`;


