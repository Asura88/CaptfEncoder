XXencode 编码
===================


XXencode是一种二进制到文字的编码！它跟UUencode以及Base64编码方法很类似。它也是定义了用可打印字符表示二进制文字一种方法，不是一种新的编码集合。XXencode将输入文本以每三个字节为单位进行编码，如果最后剩下的资料少于三个字节，不够的部份用零补齐。三个字节共有24个Bit，以6-bit为单位分为4个组，每个组以十进制来表示所出现的字节的数值。这个数值只会落在0到63之间。它64可打印字符固定字符范围及顺序！包括大小写字母、数字以及+-字符。它较UUencode编码优点在于它64字符是常见字符，没有任何特殊字符！


## Reference 

 * <http://web.chacuo.net/charsetxxencode>