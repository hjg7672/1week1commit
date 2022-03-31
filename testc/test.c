#include <stdio.h>

int main (void)
{

  int menu;       //선택된 메뉴 번호

  printf("1.파일 열기\n");    //메뉴를 출력한다
  printf("2.재생\n");
  printf("3.재생 옵션\n");
  printf("4.선택:\n");

  scanf("%d", &menu);   //메뉴 번호를 입력받는다
  if (menu ==1){        //파일 열기 메뉴
      printf("파일 열기 메뉴를 선택했습니다.\n");
  }
  else if (menu ==2){   //재생 메뉴
      printf("재생 메뉴를 선택했습니다.\n");
  }
  else if (menu ==3){   //재생 옵션 메뉴
      printf("재생 옵션 메뉴를 선택했습니다.\n");
  }
  else{                 //1~3이 아닌 메뉴 번호를 선택하는 경우
      printf("잘못 선택하셨습니다\n");
  }
    return 0;
}