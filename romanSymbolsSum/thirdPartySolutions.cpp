#include <iostream> 
#include <vector> 

using namespace std;

int check(char l){
if(l=='I')
return 1;
if(l=='V')
return 5;
if(l=='X')
return 10;
if(l=='L')
return 50;
if(l=='C')
return 100;
if(l=='D')
return 500;
if(l=='M')
return 1000;
return -1;
}
int romanToInt(string s) {
int result=0;
for(int i=0;i<s.length();i++){
int s1=check(s[i]);
if(i+1<s.length()){
int s2=check(s[i+1]);
if(s1>=s2){
result+=s1;
}
else{
result+=s2-s1;
i++;
}
}
else
result+=s1;
}
return result;
}


//----------------------------------------------------------------------------

class Solution {
public:
    int romanToInt(string s) {
        int ret = 0;
        for(int i=0, l=s.size();i<l; i++){
            switch(s[i]){
                case 'I': ret += 1; break;
                case 'V': ret+=(i-1>=0 && s[i-1]=='I')? 3:5; break;
                case 'X': ret+=(i-1>=0 && s[i-1]=='I')? 8:10; break;
                case 'L': ret+=(i-1>=0 && s[i-1]=='X')? 30:50; break;
                case 'C': ret+=(i-1>=0 && s[i-1]=='X')? 80:100; break;
                case 'D': ret+=(i-1>=0 && s[i-1]=='C')? 300:500; break;
                case 'M': ret+=(i-1>=0 && s[i-1]=='C')? 800:1000; break;
            }
        }
        return ret;
    }
};