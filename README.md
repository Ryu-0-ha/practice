Flexbox

container,item 에 들어간 속성들이 포함되어있음
ex) container: display, flex-direction,flex-wrap,flex-flow,justify-content,align-items,align-content...

item: order,flex-grow, flex-shrink,flex, align-self

Flexbox에는 중심축과 반대축 있음

^  main axis(중심축 (item들이 나열되는 방향))
ㅣ
 ㅡㅡ>cross axis(반대축(itme들이 나열되는 반대 방향))

material Design - 색 조합 사이트

Row:가로
column:세로
----------
CONTAINER
justify-content :중심축에서 배치하는 것
ex) center,flex-start,flex-end, space-around,space-between

align-items :반대축에서 아이템들을 어떻게 할 것 인지
ex) baseline

align-content :반대축에서 배치하는 것
ex)justify-content랑 비슷함

CSS-TRICKS
-----------
ITEM
order :잘 안씀 순서 바꾸는거
flex-grow :늘어나는 정도
flex-shrink :줄어드는 정도 
flex-basis :공간을 얼마나 찾이하는지 자세히 알려주는것
align-self:item 하나만 위치 조정


#
1.flexbox 는 container,item을 꾸며주는 속성값 있음
2.중심,반대 축이 있음
