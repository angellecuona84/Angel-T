#!/usr/bin/perl
use strict;
use warnings;
 
use DBI;

#CREATE TABLE testDB (id integer, first_name varchar(30), last_name varchar(30), home varchar(80)); 
#INSERT INTO testDB VALUES (1, "Rose", "Tyler", "heart");
#INSERT INTO testDB VALUES (1, "Zoe", "Heriot", "Space Station W3");
#INSERT INTO testDB VALUES (1, "Joe", "Grant", "heart");
 
my $dbfile = "testDB.db";
 
my $dsn      = "dbi:SQLite:dbname=$dbfile";
my $user     = "";
my $password = "";
my $dbh = DBI->connect($dsn, $user, $password, {
   PrintError       => 0,
   RaiseError       => 1,
   AutoCommit       => 1,
   FetchHashKeyName => 'NAME_lc',
});
 
my $sql = 'SELECT first_name, last_name, home FROM testDB';
my $sth = $dbh->prepare($sql);
$sth->execute(1, 10);
while (my @row = $sth->fetchrow_array) {
   print "first name: $row[0]  last name: $row[1] home: $row[2]\n";
}
 
 
$dbh->disconnect;
