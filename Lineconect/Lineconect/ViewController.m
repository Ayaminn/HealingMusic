//
//  ViewController.m
//  Lineconect
//
//  Created by ヒーロー on 12/23/14.
//  Copyright (c) 2014 Daichi Hirota. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    //myURLに Appleのサイトを指定
    NSURL *myURL = [NSURL URLWithString:@"http://dvjsystem.herokuapp.com"];
    //リクエストを作成
    NSURLRequest *myRequest = [NSURLRequest requestWithURL:myURL];
    //リクエストされた URLを読み込み
    [self.myWebView loadRequest:myRequest];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
