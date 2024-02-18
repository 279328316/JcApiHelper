echo off
cls
:: 设置变量不能有空格 等号左边不允许有空格，等号右边的所有包括空格会全部赋值给变量。
set version=1.0.20
echo User Dir %USERPROFILE%   FileVersion : %version%

set curDir="%USERPROFILE%\.nuget\packages\jc.apihelper\%version%\lib\netcoreapp3.0\"
echo Target Dir : %curDir%
Del "%curDir%\*" /q
xcopy /Y "Jc.ApiHelper\bin\Debug\net8.0" %curDir%

echo Copy Finished.
pause 