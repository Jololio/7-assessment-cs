extraLargeArray results: (ms = miliseconds μs = microseconds)

doublerAppend:          doublerInsert:
1) 3.3225 ms            1) 964.8095 ms

tinyArray results:

doublerAppend:          doublerInsert:
1) 81.5 μs              1) 36.9 μs

smallArray results:

doublerAppend:          doublerInsert:
1) 91.4 μs              1) 47.6 μs

mediumArray results:

doublerAppend:          doublerInsert:
1) 134.2 μs             1) 172.9 μs

largeArray results:

doublerAppend:          doublerInsert:
1) 512.1 μs             1) 8.1382 ms


The pattern I see is that the insert function tends to be much slower when the array passed in is either very large, or when it's extra small. The small/medium arrays showed it to be faster just barely, but the 2 extreme arrays on the ends of the spectrum (tiny/extraLarge) made it go much slower than the append function. I think the append scales much better, because it never got to one full milisecond UNTIL the largest array, but the insert function hit way over 1 ms when it got to just the 2nd largest array. 

The reason why I think the insert function is so slow, is because the runtime complexity of push() is faster than the runtime of unshift. the unshift method has to increment all the existing indexes in the array, while push only adds it to the end of the array, not needing to mess with the already existing indexes in the array.